import { useState } from "react";

export default function TodoListApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditTask = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const updateTask = () => {
    if (editTask.trim() !== "") {
      const updatedTasks = tasks.map((task, index) =>
        index === editIndex ? editTask : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditTask("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (editIndex !== null) {
            updateTask();
          } else {
            addTask();
          }
        }}
      >
        <label>
          {editIndex !== null ? "Edit Task" : "New Task"}
        </label>
        <input
          type="text"
          value={editIndex !== null ? editTask : newTask}
          onChange={(e) => {
            if (editIndex !== null) {
              setEditTask(e.target.value);
            } else {
              setNewTask(e.target.value);
            }
          }}
        />
        <button type="submit">
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => startEditTask(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
