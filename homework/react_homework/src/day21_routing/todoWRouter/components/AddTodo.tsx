import { useContext } from "react";
import { ToDoContext } from "./todoContext";

export default function AddTodo() {
  const { setTask, task, handleAdd } = useContext(ToDoContext);
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="ADD TODO LIST"
        />
        <button onClick={handleAdd}>Add</button>
      </label>
    </div>
  );
}
