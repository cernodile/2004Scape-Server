import fs from 'fs';
import Packet from '#jagex2/io/Packet.js';
import { ConfigType } from "#lostcity/cache/ConfigType.js";
import ScriptVarType from './ScriptVarType.js';

export default class DbTableType extends ConfigType {
    private static configNames = new Map<string, number>();
    private static configs: DbTableType[] = [];

    static load(dir: string) {
        DbTableType.configNames = new Map();
        DbTableType.configs = [];

        if (!fs.existsSync(`${dir}/dbtable.dat`)) {
            console.log('Warning: No dbtable.dat found.');
            return;
        }

        let dat = Packet.load(`${dir}/dbtable.dat`);
        let count = dat.g2();

        for (let id = 0; id < count; id++) {
            let config = new DbTableType(id);
            config.decodeType(dat);

            DbTableType.configs[id] = config;

            if (config.debugname) {
                DbTableType.configNames.set(config.debugname, id);
            }
        }
    }

    static get(id: number) {
        return DbTableType.configs[id];
    }

    static getId(name: string) {
        return DbTableType.configNames.get(name) ?? -1;
    }

    static getByName(name: string) {
        let id = this.getId(name);
        if (id === -1) {
            return null;
        }

        return this.get(id);
    }

    static decodeValues(packet: Packet, types: any[]) {
        let fieldCount = packet.g1();
        let values = new Array(fieldCount * types.length);

        for (let fieldId = 0; fieldId < fieldCount; fieldId++) {
            for (let typeId = 0; typeId < types.length; typeId++) {
                let type = types[typeId];
                let index = typeId + (fieldId * types.length);

                if (type === ScriptVarType.STRING) {
                    values[index] = packet.gjstr();
                } else {
                    values[index] = packet.g4s();
                }
            }
        }

        return values;
    }

    // ----

    types: any[] = [];
    defaultValues: any[][] = [];
    columnNames: string[] = [];

    decode(opcode: number, packet: Packet) {
        if (opcode === 1) {
            this.types = new Array(packet.g1());

            for (let setting = packet.g1(); setting != 255; setting = packet.g1()) {
                let column = setting & 0x7F;
                let hasDefault = (setting & 0x80) !== 0;

                let columnTypes = new Array(packet.g1());
                for (let i = 0; i < columnTypes.length; i++) {
                    columnTypes[i] = packet.g1();
                }
                this.types[column] = columnTypes;

                if (hasDefault) {
                    if (!this.defaultValues) {
                        this.defaultValues = new Array(this.types.length);
                    }

                    this.defaultValues[column] = DbTableType.decodeValues(packet, columnTypes);
                }
            }
        } else if (opcode === 250) {
            this.debugname = packet.gjstr();
        } else if (opcode === 251) {
            this.columnNames = new Array(packet.g1());

            for (let i = 0; i < this.columnNames.length; i++) {
                this.columnNames[i] = packet.gjstr();
            }
        } else {
            console.error(`Unrecognized dbtable config code: ${opcode}`);
        }
    }
}
