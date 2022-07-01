export default class Attack {
    constructor(protocol) {
        this.protocol = protocol;
    };

    attack(scan){
        return this.protocol.attack(scan);
    }
}