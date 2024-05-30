const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.use(bodyParser.json())

let todos = []
let idCounter = 1

app.post('/todos', (req, res) => {
  const {title, description} = req.body
  const newTodo = {id: idCounter++, title, description}
  todos.push(newTodo)
  res.status(201).json(newTodo)
})

app.get('/todos', (req, res) => {
  res.json(todos)
})

app.get('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const todo = todos.find((t) => t.id === todoId)
  if (!todo) {
    return res.status(404).json({error: 'Todo not found'})
  }
  res.json(todo)
})

app.put('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const {title, description} = req.body
  const todo = todos.find((t) => t.id === todoId)
  if (!todo) {
    return res.status(404).json({error: 'Todo not found'})
  }
  todo.title = title
  todo.description = description
  res.json(todo)
})

app.delete('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id)
  const todoIndex = todos.findIndex((t) => t.id === todoId)
  if (todoIndex === -1) {
    return res.status(404).json({error: 'Todo not found'})
  }
  const deletedTodo = todos.splice(todoIndex, 1)
  res.json(deletedTodo[0])
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
