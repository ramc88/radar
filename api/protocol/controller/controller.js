import AvoidMechs from './classes/avoidMechs.js';
import AvoidCrossFire from './classes/avoidCrossFire.js';
import ClosestEnemies from './classes/closestEnemies.js';
import FurthestEnemies from './classes/furthestEnemies.js';
import AssistAllies from './classes/assistAllies.js';
import PrioMechs from './classes/prioMechs.js';

const getNewProto = (name, instance) => {
    let protoInstance;
    switch(name){
        case 'avoid-mech':
            protoInstance = new AvoidMechs(instance);
            break;
        case 'closest-enemies':
            protoInstance = new ClosestEnemies(instance);
            break;
        case 'furthest-enemies':
            protoInstance = new FurthestEnemies(instance);
            break;
        case 'assist-allies':
            protoInstance = new AssistAllies(instance);
            break;

        case 'avoid-crossfire':
            protoInstance = new AvoidCrossFire(instance);
            break;

        case 'prioritize-mech':
            protoInstance = new PrioMechs(instance);
            break;

        default:
            throw new Error('Unknown protocol');
        }
        return protoInstance;
};

export default getNewProto;