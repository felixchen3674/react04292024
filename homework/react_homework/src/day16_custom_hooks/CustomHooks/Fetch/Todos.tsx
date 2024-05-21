import React from "react";
import useFetch from "./useFetch";

// use useFetch to implement the Component
// fetches from jsonplaceholder, implement loading, and error handling
interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Todos() {
  const { data, isLoading, error } = useFetch<TodoType>(
    "https://jsonplaceholder.typicode.com/todos"
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error && error.message}</div>;
  }
  return (
    <div>
      <h1>Todos</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}
