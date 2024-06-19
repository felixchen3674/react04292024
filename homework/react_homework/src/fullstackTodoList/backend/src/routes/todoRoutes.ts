import { Router } from 'express';
import TodoModel from '../models/todo';

const router = Router();

// Create a new todo
router.post('/', async (req, res) => {
  const { task } = req.body;
  const todo = new TodoModel({ task });
  await todo.save();
  res.status(201).send(todo);
});

// Get all todos
router.get('/', async (req, res) => {
  const todos = await TodoModel.find();
  res.send(todos);
});

// Update a todo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const todo = await TodoModel.findByIdAndUpdate(
    id,
    { task, completed },
    { new: true }
  );
  res.send(todo);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await TodoModel.findByIdAndDelete(id);
  res.send({ message: 'Todo deleted' });
});

export default router;
