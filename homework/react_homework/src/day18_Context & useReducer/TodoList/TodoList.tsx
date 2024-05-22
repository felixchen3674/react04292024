import React from 'react';
import { TaskProvider } from './TasksContext';
import AddTask from './AddTask';
import TasksList from './TasksList';

export default function TodoList() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>ToDo List</h1>
        <AddTask />
        <TasksList />
      </div>
    </TaskProvider>
  );
}
