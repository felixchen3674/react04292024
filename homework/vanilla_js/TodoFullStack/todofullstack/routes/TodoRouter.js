const express = require("express");
const todoRouter = express.Router();
const TodoController = require("../controllers/TodoController");

// todoRouter
//   .route("/")
//   .get(TodoController.getTodos)
//   .post(TodoController.createTodo);

// this is one option

todoRouter.get("/", TodoController.getTodos);
todoRouter.post("/", TodoController.createTodo);
todoRouter.get("/:todoId", TodoController.getSingleTodo);
todoRouter.put("/:todoId", TodoController.editTodo);
todoRouter.delete("/:todoId", TodoController.deleteTodo);

module.exports = todoRouter;
