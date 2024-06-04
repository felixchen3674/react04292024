const express = require('express');
const router = express.Router();

// Define routes
router.get('/tasks', (req, res) => {
  res.send('List of tasks');
});

router.get('/tasks/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Details of task ${taskId}`);
});

router.post('/tasks', (req, res) => {
  res.send('Create a new task');
});

router.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  res.send(`Update task ${taskId}`);
});

router.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  res.send(`Delete task ${taskId}`);
});

module.exports = router;
