import Protocol from "./protocol.js";

export default class AssistAllies extends Protocol {
    constructor(protocolToExtend) {
        super();
        this.extendedProtocol = protocolToExtend;
    }
    attack = (scan) =>{
        scan = scan.sort((a, b) => {
            const alliesA = a.allies || 0;
            const alliesB = b.allies || 0;

            return alliesA > alliesB;
        })

        if (this.extendedProtocol){ 
            return this.extendedProtocol.attack(scan)
        } else {
            return scan[0].coordinates
        }
    }
}