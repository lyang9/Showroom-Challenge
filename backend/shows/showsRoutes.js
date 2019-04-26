// node dependencies
const express = require('express');
const knex = require('knex');

// Configuration 
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

// GET all shows
router.get('/', (req, res) => {
  db('shows')
    .then(shows => {
      res.status(200).json(shows);
    })
    .catch(err => res.status(500).json(err));
});


// GET one show
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const show = await db('shows')
      .where({ id })
      .first();

    if (show) {
      res.status(200).json(show);
    } else {
      res.status(404).json({ message: "Show not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


// GET all comments for specific show_id
router.get('/:id/comments', (req, res) => {
  const { id } = req.params;
  db('comments')
    .where({ show_id: id })
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


// POST new show
router.post('/', (req, res) => {
  const show = req.body;
  db.insert(show)
    .into('shows')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;