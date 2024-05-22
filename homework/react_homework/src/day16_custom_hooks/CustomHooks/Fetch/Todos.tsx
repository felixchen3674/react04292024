import React from 'react';
import useFetch from './useFetch';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Todos() {
  const {
    data: todos,
    loading,
    error,
  } = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error && error.message}</div>;
  }

  return (
    <div>
      <h1>Todos</h1>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          </div>
        ))}
    </div>
  );
}
