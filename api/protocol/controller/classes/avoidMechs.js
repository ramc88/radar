import Protocol from "./protocol.js";

export default class AvoidMechs extends Protocol {
    constructor(protocolToExtend) {
        super();
        this.extendedProtocol = protocolToExtend;
    }

    attack = (scan) =>{
        scan = scan.reduce((acc, current) => {
            if(current.enemies.type === 'mech'){
                return acc;
            }else{
                return acc.concat(current);
            }
        }, [])

        if (this.extendedProtocol){ 
            return this.extendedProtocol.attack(scan)
        } else {
            return scan[0].coordinates
        }
    }
}
