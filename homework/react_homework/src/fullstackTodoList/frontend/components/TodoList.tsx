import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoList() {
  const todoContext = useContext(TodoContext);
  const { todos } = todoContext;
  console.log(todos);
  return (
    <div>
      This is route to todoList
      {todos.map((todo) => {
        return <li key={todo._id}>{todo.task}</li>;
      })}
    </div>
  );
}
