import mongoose, { Document } from 'mongoose';

interface Todo extends Document {
  task: string;
  completed: boolean;
  date: Date;
}

const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const TodoModel = mongoose.model<Todo>('Todo', TodoSchema);

export default TodoModel;
