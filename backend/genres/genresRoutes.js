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


// GET all shows for specific genre_id
router.get('/:id/shows', (req, res) => {
  const { id } = req.params;
  db('shows')
    .where({ genre_id: id })
    .then(shows => {
      res.status(200).json(shows);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


module.exports = router;