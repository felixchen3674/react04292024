import React from "react";
import useFetch from "./useFetch";

// use useFetch to implement the Component
// fetches from jsonplaceholder, implement loading, and error handling

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Todos() {
  const { data, isLoading, isError } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      <h1>Todos</h1>
      {data?.map((d) => (
        <div key={d.id}>
          <h2>{d.title}</h2>
          <p>{d.body}</p>
        </div>
      ))}
    </div>
  );
}
