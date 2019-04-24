// node dependencies
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// import routers
const usersRoutes = require('./users/usersRoutes.js');
const genresRoutes = require('./genres/genresRoutes.js');

// middleware
const server = express();

server.use(express.json());
server.use(helmet(), cors());

// sanity check
server.get('/', (req, res) => {
  res.send('It is working!');
});

// API endpoints routes
server.use('/api/users', usersRoutes);
server.use('/api/genres', genresRoutes);

// listening port
const port = 5000;
server.listen(port, function() {
  console.log(`\n=== API listening on port ${port} ===\n`);
});