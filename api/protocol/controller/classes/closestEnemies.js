import distance from '../utils.js';
import Protocol from "./protocol.js";

export default class ClosestEnemies extends Protocol {
    constructor(protocolToExtend) {
        super();
        this.extendedProtocol = protocolToExtend;
    }
    // sorts the enemies by distance, min to max
    attack = (scan) => {
        scan = scan.sort((a, b) => {
            return distance(a.coordinates) - distance(b.coordinates);
        });
        
        if (this.extendedProtocol){ 
            return this.extendedProtocol.attack(scan)
        } else {
            return scan[0].coordinates
        }
    }
}