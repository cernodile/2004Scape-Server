import IncomingMessage from '#lostcity/network/incoming/IncomingMessage.js';
import ClientProtCategory from '#lostcity/network/incoming/prot/ClientProtCategory.js';

export default class IdleTimer extends IncomingMessage {
    category = ClientProtCategory.CLIENT_EVENT;
}
