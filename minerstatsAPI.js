// Imports
const axios = require('axios');

// Template for URL
const MINERSTATS_API_URL = 'https://api.minerstat.com/v2/coins';

// GET request to API
async function getMinerstatsData() {
    try {
        const response = await axios.get(MINERSTATS_API_URL);
        return response.data;

    } catch (error) {
        console.log(error);
        console.error(error);
        return null;
    }
};

module.exports = { getMinerstatsData };
