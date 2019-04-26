// node dependencies
const express = require('express');
const knex = require('knex');

// Configuration 
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  db('users')
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json(err));
});


// GET single user
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await db('users')
      .where({ id })
      .first();

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


// GET all shows for specific user_id
router.get('/:id/shows', (req, res) => {
  const { id } = req.params;
  db('shows')
    .where({ user_id: id })
    .then(shows => {
      res.status(200).json(shows);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});


// POST new user
router.post('/', (req, res) => {
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
});

module.exports = router;