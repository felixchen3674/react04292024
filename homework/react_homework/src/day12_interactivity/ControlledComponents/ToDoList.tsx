import { useState } from "react";
import Checkbox from "./Checkbox";

interface ToDoType {
  id: number;
  task: string;
  completed: boolean;
}

function ToDoList() {
  const [toDos, setToDos] = useState<ToDoType[]>([]);
  const [newToDos, setNewToDos] = useState("");

  const handleAddList = () => {
    if (newToDos.trim() !== "") {
      const newId = toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 1;
      const newToDosItem: ToDoType = {
        id: newId,
        task: newToDos.trim(),
        completed: false,
      };

      setToDos([...toDos, newToDosItem]);
      setNewToDos("");
    }
  };
  const handleRemoveList = (id: number) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };
  const handleToggleComplete = (id: number) => {
    const updatedToDos = [...toDos];
    const todoIndex = updatedToDos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      updatedToDos[todoIndex] = {
        ...updatedToDos[todoIndex],
        completed: !updatedToDos[todoIndex].completed,
      };
      setToDos([...updatedToDos]);
    }
  };

  return (
    <div>
      <h2>To Do List</h2>
      <ul>
        {toDos.map((toDo) => (
          <>
            <li key={toDo.id}>
              <Checkbox
                checked={toDo.completed}
                onChange={() => handleToggleComplete(toDo.id)}
              />
              {toDo.task}
              {' '}
              {toDo.completed ? "Completed" : "Incomplete"}
              <button onClick={() => handleRemoveList(toDo.id)}>Remove</button>
            </li>
          </>
        ))}
      </ul>
      <input
        type="text"
        value={newToDos}
        onChange={(e) => setNewToDos(e.target.value)}
        placeholder="Task"
      />
      <button onClick={handleAddList}>Add Task</button>
    </div>
  );
}

export default ToDoList;
