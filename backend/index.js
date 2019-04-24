// node dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');

// Configuration 
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

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
server.post('/api/users', (req, res) => {
  // grab data from body
  const user = req.body;

  // save data to database
  db.insert(user)
    .into('users')
    .then(ids => {
      // return id of newly created record
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
})

// listening port
const port = 5000;
server.listen(port, function() {
  console.log(`\n=== API listening on port ${port} ===\n`);
});