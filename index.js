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

// Route Handlers
  // Catch-all
app.get("/", (req, res) => {
  res.send("Server is Running!")
});

// GET mining pool list
app.get('/mining-pools', async (req, res) => {
  const data = await getMinerstatsData();

  // Valid Data
  if (data) {
    // Filter the data for type set to 'pool'
    const miningPools = data.filter((item) => item.type === 'pool');
    res.json(miningPools);

  // Invalid Data/Unsuccessful
  } else {
    res.status(500).send('Internal Server Error!');
  }
});

// Server 
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
});

// Exports