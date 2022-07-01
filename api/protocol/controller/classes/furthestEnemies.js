import distance from '../utils.js';
import Protocol from "./protocol.js";

export default class FurthestEnemies extends Protocol {
    constructor(protocolToExtend) {
        super();
        this.extendedProtocol = protocolToExtend;
    }
    // sorts the enemies by distance, max to min
    attack = (scan) => {
        scan = scan.sort((a, b) => {
            return distance(b.coordinates) - distance(a.coordinates);
        }).filter(item => distance(item.coordinates) <= 100);

        
        if (this.extendedProtocol){ 
            return this.extendedProtocol.attack(scan)
        } else {
            return scan[0].coordinates
        }
    }
}