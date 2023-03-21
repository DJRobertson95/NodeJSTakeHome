// Imports
const express = require('express');
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

  // Main
app.get('/', (req, res) => {
  res.send('Good luck!')
});

// Server 
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
});

// Exports