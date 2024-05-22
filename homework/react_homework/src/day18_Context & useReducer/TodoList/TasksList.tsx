import React, { useContext } from 'react';
import { TaskContext } from './TasksContext';

export default function TasksList() {
  const { state, updateTask, deleteTask } = useContext(TaskContext);
  const { tasks, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleToggle = (task: any) => {
    updateTask({ ...task, done: !task.done });
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.done ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            onClick={() => handleToggle(task)}
          >
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
