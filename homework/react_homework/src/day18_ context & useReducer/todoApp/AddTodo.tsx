import { useContext } from "react";
import { ToDoContext } from "./todoContext";

export default function AddTodo() {
  const { setName, name, handleAdd } = useContext(ToDoContext);
  return (
    <div>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ADD TODO LIST"
        />
        <button onClick={handleAdd}>Add</button>
      </label>
    </div>
  );
}
