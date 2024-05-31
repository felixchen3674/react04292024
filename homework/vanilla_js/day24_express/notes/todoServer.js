const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const todos = [
  { id: 1, title: "todo1", iscompleted: false },
  { id: 2, title: "todo2", iscompleted: false },
  { id: 3, title: "todo3", iscompleted: false },
];

app.get("/todo", (req, res) => {
  res.json({ todos: todos });
});

app.post("/todo", (req, res) => {
  const newTodo = req.body;
  if (!newTodo)
    return res.sendStatus(403).send({ message: "body is required" });
  todos.push(newTodo);
  res.send({ message: "success!" });
});

app.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  if (!id) return res.sendStatus(404).send({ message: "id is required" });
  todos = todos.filter((todo) => todo.id !== id);
  res.send({ message: "success!" });
});

app.put("/todo/:id", (req, res) => {
  const id = req.params.id;
  const newTodo = req.body;
  if (!id) {
    return res.status(400).send({ message: "Id id required" });
  }
  if (!todos.find((item) => item.id === id))
    return res.status(400).send({ message: "ID is not found" });
  if (!newTodo) {
    return res.status(400).send({ message: "body is required" });
  }
  todos = todos.forEach((todo) => {
    if (todo.id === id) {
      todo = newTodo;
    }
    res.send({ message: "success!" });
  });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
