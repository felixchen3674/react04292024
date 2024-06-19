const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find(); // look for all todos
    if (todos.length > 0) {
      res.send(todos);
    } else {
      res.status(400).json({ message: "Todos not exist!" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Error" });
  }
};

exports.getSingleTodo = async (req, res) => {
  try {
    const { todoId } = req.params;
    const todo = await Todo.findOne({ _id: todoId }); //look for single todo
    if (todo) {
      res.send(todo);
    } else {
      res.status(400).json({ message: "todo not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Error" });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const body = req.body;

    if (body) {
      const newTodo = new Todo({ ...body }); // using the schema to create new object and save in database
      const result = await newTodo.save();
      console.log(result);
      res
        .status(200)
        .json({ message: "Todo creates successfully", todo: result });
    } else {
      res.status(400).json({ message: "Body required" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Error" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.params;

    // const deletedTodo = await Todo.findByIdAndDelete(todoId);
    // if (!deletedTodo) {
    //   return res.status(404).json({ message: "Todo not found" });
    // }
    // res.status(204).send();
    //// This is the optional way to delete by using id

    const todo = await Todo.findOne({ _id: todoId });
    if (todo) {
      const result = await Todo.deleteOne({ _id: todoId });
      console.log(result, "check");
      res
        .status(200)
        .json({ message: "Todo deletes successfully", todo: todo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Error" });
  }
};

exports.editTodo = async (req, res) => {
  try {
    const { task, completed, date, description } = req.body;
    const { todoId } = req.params;
    const updateField = {};
    if (task) updateField.task = task;
    if (completed !== undefined) updateField.completed = completed;
    if (date) updateField.date = date;
    if (description) updateField.description = description;
    // check the each part of the body if it is exist in request, if it does, just pass it to updateField, if not just update the one exist

    const result = await Todo.findOneAndUpdate({ _id: todoId }, updateField, {
      new: true,
    });
    if (result) {
      res.status(200).json(result);
      console.log(result, "shenme");
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (err) {
    res.status(500).json({ message: "Internal Error" });
  }
};
