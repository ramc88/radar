import Protocol from "./protocol.js";

export default class PrioMechs extends Protocol {
    constructor(protocolToExtend) {
        super();
        this.extendedProtocol = protocolToExtend;
    }
    attack = (scan) =>{
        // split into two result arrays, if there is no mech, return the first, otherwise return the second
        // the second only contains mech
        scan = scan.reduce((acc, current) => {
            if(current.enemies.type === 'mech'){
                acc[1] = acc[1].concat(current);
                return acc;
            }else{
                acc[0] = acc[0].concat(current);
                return acc;
            }
        }, [[],[]])

        let arrRet = scan[1].length > 0 ? scan[1] : scan[0];
        if (this.extendedProtocol){ 
            return this.extendedProtocol.attack(arrRet)
        } else {
            return arrRet[0].coordinates
        }
    }
}