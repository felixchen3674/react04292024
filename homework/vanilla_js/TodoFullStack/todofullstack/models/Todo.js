const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const refType = Schema.Types.ObjectId;

const TodoSchema = new Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, required: true },
  date: { type: String, required: true },
  description: { type: String, required: true }, // if the data you passing to is "" , it will consider as empty as well, it will cause error
});

const Todo = mongoose.model("Todo", TodoSchema, "Todo");

module.exports = Todo;
