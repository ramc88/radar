import getNewProto from '../../protocol/controller/controller.js';
import Attack from './classes/attack.js';
import { sortKeys } from './utils.js';

export async function getObjetive(req, res) {
    try{
        if (!req.isDev && !req.is('application/json')) {
            throw new Error('Invalid request');
        };
        const {protocols, scan} = req.body;
        if(!protocols || !scan || protocols.length === 0 || scan.length === 0){
            throw new Error('Missing data')
        };

        let protoInstance;
        protocols.reverse().forEach((p) => {
            // merge the protocols in case there are more than one
            protoInstance = getNewProto(p, protoInstance);
        });

        const attack = new Attack(protoInstance);
        const result = attack.attack(scan);

        if(req.isDev){
            return result;
        }else {
            res.send(sortKeys(result));
        };
    } catch(e){
        console.log(e)
        if(!req.isDev){
            res.status(400).send(e.message);
        }
    }
};
