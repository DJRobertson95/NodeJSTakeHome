// Imports
const { getMinerstatsData } = require('../minerstatsAPI');

// Test Suite
    // Describe Case
describe('getMinerstatsData function', () => {
    // Test Case
    test('Should return an array of mining data', async () => {

        const data = await getMinerstatsData();

        // Expect
        // The response is an array and has at least one item
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);

        // Verifying expected properties of each item
        expect(data[0]).toHaveProperty('coin');
        expect(data[0]).toHaveProperty('type');
        expect(data[0]).toHaveProperty('reward');

        // Presence of the hashrate property if type = 'pool'
        if (data[0].type === 'pool') {
            expect(data[0]).toHaveProperty('hashrate');
        }
    
        // Absence of the hashrate property if type = 'coin'
        if (data[0].type === 'coin') {
            expect(data[0]).not.toHaveProperty('hashrate');
        }
    });
});