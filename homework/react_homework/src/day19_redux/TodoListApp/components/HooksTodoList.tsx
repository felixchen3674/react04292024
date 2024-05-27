import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TodoState, Todo } from '../redux/todoitems/todoTypes';
import { deleteTodo } from '../redux/todoitems/todoActions';

function HooksTodoList() {
  const todos = useSelector((state: TodoState) => state);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} - {todo.status}
            <button key={todo.id} onClick={() => handleDelete(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HooksTodoList;
