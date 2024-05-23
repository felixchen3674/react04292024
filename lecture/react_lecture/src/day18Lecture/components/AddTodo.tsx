import { FormEvent } from "react";
import { useTodoContext } from "../context/TodoContext";

export default function AddTodo() {
  const { handleAddTodo, newTask, setNewTask } = useTodoContext();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddTodo(newTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button>Add Todo</button>
    </form>
  );
}
