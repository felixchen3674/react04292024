import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RadioGroup from "./RadioGroup";
import Select from "./Select";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index: number, newValue: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
  };

  const handleTaskCompletion = (index: number, checked: boolean) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = checked ? tasks[index] + "Completed" : tasks[index];
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Checkbox
              label={task}
              checked={false}
              onChange={(checked) => handleTaskCompletion(index, checked)}
            />
            <button
              onClick={() =>
                handleEditTask(index, prompt("Edit task:", task) || task)
              }
            >
              Edit
            </button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <RadioGroup />
      <Select />
    </div>
  );
};

export default TodoList;
