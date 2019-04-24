// node dependencies
const express = require('express');
const knex = require('knex');

// Configuration 
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

// GET all genres
router.get('/', (req, res) => {
  db('genres')
    .then(genres => {
      res.status(200).json(genres);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;