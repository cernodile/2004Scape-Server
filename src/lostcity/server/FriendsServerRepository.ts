import { fromBase37, toBase37 } from '#jagex2/jstring/JString.js';

import { db } from '#lostcity/db/query.js';

/**
 * Stores friends data related to players.
 * 
 * Responsible for database queries and caching.
 */
export class FriendsServerRepository {
    /**
     * playersByWorld[worldId][playerIndex] = username37 | null
     */
    private playersByWorld: (bigint | null)[][] = [];

    /**
     * worldByPlayer[username] = worldId
     */
    private worldByPlayer: Record<string, number> = {};

    /**
     * playerFriends[username] = username37[]
     */
    private playerFriends: Record<string, bigint[]> = {};

    public initializeWorld(world: number, size: number) {
        if (this.playersByWorld[world]) {
            return;
        }

        this.playersByWorld[world] = new Array(size).fill(null);
    }

    public getWorld(username37: bigint) {
        const username = fromBase37(username37);

        return this.worldByPlayer[username];
    }

    public async register(world: number, username37: bigint) {
        const username = fromBase37(username37);

        // add player to new world
        const newIndex = this.playersByWorld[world].findIndex(p => p === null);
        if (newIndex === -1) {
            // TODO handle this better?
            console.error(`[Friends]: World ${world} is full`);
            return false;
        }

        this.playersByWorld[world][newIndex] = username37;
        this.worldByPlayer[username] = world;
        await this.loadFriends(username37);

        return true;
    }

    public unregister(username37: bigint) {
        const username = fromBase37(username37);

        // if we know what world they are on, remove them from that world specifically
        const world = this.worldByPlayer[username];
        if (world) {
            const player = this.playersByWorld[world].findIndex(p => p === username37);

            if (player !== -1) {
                this.playersByWorld[world][player] = null;
                delete this.worldByPlayer[username];
                delete this.playerFriends[username];
                return;
            }
        }

        // otherwise, look through all worlds
        for (let i = 0; i < this.playersByWorld.length; i++) {
            if (!this.playersByWorld[i]) {
                continue;
            }

            const player = this.playersByWorld[i].findIndex(p => p === username37);

            if (player !== -1) {
                this.playersByWorld[i][player] = null;
                delete this.worldByPlayer[username];
                delete this.playerFriends[username];
            }
        }
    }

    public async getFriends(username37: bigint) {
        await this.loadFriends(username37);
        const username = fromBase37(username37);

        const playerFriends: [number, bigint][] = [];
        for (const [worldId, worldPlayers] of this.playersByWorld.entries()) {
            if (!worldPlayers?.length) {
                continue;
            }

            const friendsOnWorld: bigint[] = worldPlayers
                .filter(p => p !== null)
                .filter(p => this.playerFriends[username].includes(p));

            if (friendsOnWorld.length === 0) {
                continue;
            }

            for (const friend of friendsOnWorld) {
                if (this.isVisibleTo(username37, friend) === false) {
                    continue;
                }

                // TODO cap to 100 friends here too?
                playerFriends.push([worldId, friend]);
            }
        }

        const remainingFriends = this.playerFriends[username].filter(f => !playerFriends.some(p => p[1] === f));
        for (const friend of remainingFriends) {
            playerFriends.push([0, friend]);
        }

        return playerFriends;
    }

    /**
     * Get all "followers" of a player,
     * i.e. players who have the player in their friend list
     */
    public getFollowers(username37: bigint) {
        return Object.entries(this.playerFriends)
            .filter(([_, friends]) => friends.includes(username37))
            .map(([username, _]) => toBase37(username));
    }

    public async deleteFriend(username37: bigint, targetUsername37: bigint) {
        // I tried to do all this in 1 query but Kyesly wasn't happy
        const accountId = await db
            .selectFrom('account')
            .select('id')
            .where('username', '=', fromBase37(username37))
            .limit(1)
            .executeTakeFirst();

        const friendAccountId = await db
            .selectFrom('account')
            .select('id')
            .where('username', '=', fromBase37(targetUsername37))
            .limit(1)
            .executeTakeFirst();

        if (accountId && friendAccountId) {
            await db
                .deleteFrom('friendlist')
                .where('account_id', '=', accountId.id)
                .where('friend_account_id', '=', friendAccountId.id)
                .execute();
        }
    }

    public async addFriend(username37: bigint, targetUsername37: bigint) {
        const username = fromBase37(username37);
        const targetUsername = fromBase37(targetUsername37);

        // I tried to do all this in 1 query but Kyesly wasn't happy
        const accountId = await db
            .selectFrom('account')
            .select('id')
            .where('username', '=', fromBase37(username37))
            .limit(1)
            .executeTakeFirst();

        const friendAccountId = await db
            .selectFrom('account')
            .select('id')
            .where('username', '=', fromBase37(targetUsername37))
            .limit(1)
            .executeTakeFirst();

        if (!accountId || !friendAccountId) {
            console.error(`[Friends]: ${username} tried to add ${targetUsername} to their friend list, but one of the accounts does not exist`);
            return;
        }

        const existing = await db
            .selectFrom('friendlist')
            .select(['account_id', 'friend_account_id'])
            .where('account_id', '=', accountId.id)
            .where('friend_account_id', '=', friendAccountId.id)
            .executeTakeFirst();

        if (existing) {
            console.error(`[Friends]: ${username} tried to add ${targetUsername} to their friend list, but they are already friends`);
            return;
        }

        // TODO check player is not over friends limit

        await db
            .insertInto('friendlist')
            .values({
                account_id: accountId.id,
                friend_account_id: friendAccountId.id,
            })
            .execute();
    }

    private async loadFriends(username37: bigint) {
        const username = fromBase37(username37);
        const friendUsernames = await db
            .selectFrom('account as a')
            .innerJoin('friendlist as f', 'a.id', 'f.friend_account_id')
            .innerJoin('account as local', 'local.id', 'f.account_id')
            .select('a.username')
            .where('local.username', '=', username)
            .execute();
        const friendUsername37s = friendUsernames.map(f => toBase37(f.username));

        this.playerFriends[username] = friendUsername37s;
    }

    private isVisibleTo(playerUsername37: bigint, targetUsername37: bigint) {
        const playerUsername = fromBase37(playerUsername37);
        
        return this.playerFriends[playerUsername]?.includes(targetUsername37) ?? false;
    }
}
