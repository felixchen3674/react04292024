require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router
  .route('/')
  .get((req, res) => {
    res.send('User List');
  })
  .post((req, res) => {
    res.send('Create a User');
  });

router.get('/new', (req, res) => {
  res.send('User New Form');
});

router.get('/:id', (req, res) => {
  res.send(`Get user id is ${req.params.id}`);
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken: accessToken });
});

module.exports = router;
