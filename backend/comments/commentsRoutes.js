// node dependencies
const express = require('express');
const knex = require('knex');

// Configuration 
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

// POST new comment
router.post('/', (req, res) => {
  const comment = req.body;
  db.insert(comment)
    .into('comments')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;