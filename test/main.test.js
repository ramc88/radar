import { getObjetive } from '../api/attack/controller/controller'
const testCases = require('../testCases');

describe('tests', () => {
    testCases.forEach(({input, output}) => {
        it(`should work with output ${JSON.stringify(input.protocols)}`, async () => {
            const req = {
                isDev: true,
                body: {...input}
            }
            const result = await getObjetive(req);
            expect(result).toEqual(output)
        })
    })
})