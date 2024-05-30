const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Use the cors middleware
app.use(cors());
app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Todo API");
});

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const id = (
    todos.length ? parseInt(todos[todos.length - 1].id) + 1 : 1
  ).toString();
  const newTodo = {
    id: id,
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === id);
  if (index !== -1) {
    const deleteTodo = todos.splice(index, 1);
    res.json(deleteTodo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
