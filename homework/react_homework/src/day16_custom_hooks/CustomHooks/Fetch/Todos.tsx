import React from "react";
import useFetch from "./useFetch";

// use useFetch to implement the Component
// fetches from jsonplaceholder, implement loading, and error handling

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Todos() {
  const { data, loading, error } = useFetch<Todo[]>('https://jsonplaceholder.typicode.com/todos');
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error && error.message}</div>;
  }

  return (
    <>
      <h1>Todos</h1>
      {data?.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </div>
      ))}
    </>
  );
}
