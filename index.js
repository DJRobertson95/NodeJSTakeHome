// Imports
const express = require('express');
const { getMinerstatsData } = require('./minerstatsAPI');

// Express App
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Authentication
const authenticateToken = (req, res, next) => {

  // Pull credentials
  const authHeader = req.headers['authorization'];

  // Split the Auth to get Auth type + token
  const token = authHeader && authHeader.split(' ')[1];

  // Check for Token match
  if (token === 'f2b0156f-cf95-4e29-9f57-51296a481c6a') {
    next();

  } else {
    res.sendStatus(401);
  }
};

// Route Handlers
  // Catch-all
app.get("/", (req, res) => {
  res.send("Server is Running!")
});

// GET mining pool list
app.get('/mining-pools', authenticateToken, async (req, res) => {
  const data = await getMinerstatsData();

  // Valid API Data
  if (data) {
    // Filter the data for type set to 'pool'; not individual coins.
    let miningPools = data.filter((item) => item.type === 'pool');
    const { coin } = req.query;

    // Coin included in request
    if (coin) {
      // Filter for the specific coin
      miningPools = miningPools.filter((item) => item.coin === coin.toUpperCase());
    };

    // Sort data by reward in descending order &,
    // Select Top 10 pools w/ highest rewards
    miningPools = miningPools.sort ((a, b) => b.reward - a.reward).slice(0, 10);
    res.json(miningPools);

  // Invalid API Data/Unsuccessful
  } else {
    res.status(500).send('Internal Server Error!');
  }
});

// Server 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

// Exports