import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../redux/todoitems/todoActions';
import HooksTodoList from './HooksTodoList';

function HooksAddTodo() {
  const dispatch = useDispatch();

  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      //   addTodo(task);
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add Todo</button>
      </form>
      <HooksTodoList />
    </div>
  );
}

export default HooksAddTodo;
