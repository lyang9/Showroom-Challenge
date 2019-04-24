// node dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// middleware
const server = express();

server.use(express.json());
server.use(helmet(), cors());

// sanity check
server.get('/', (req, res) => {
  res.send('It is working!');
});

// GET all users


// GET single user


// POST new user


// listening port
const port = 5000;
server.listen(port, function() {
  console.log(`\n=== API listening on port ${port} ===\n`);
});