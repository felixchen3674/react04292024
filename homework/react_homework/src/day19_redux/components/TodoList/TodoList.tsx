import React from "react";
import { TodoType } from "../../reducer/todosReducer";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList({ todos }: { todos: TodoType[] }) {
  const isLoading = useSelector((state) => state.loading);

  if (isLoading) return <div>loading...</div>;
  if (todos.length === 0) return <p>No todos available</p>;

  return (
    <ul>
      {todos.map((listItem) => (
        <TodoItem key={listItem.id} todo={listItem} />
      ))}
    </ul>
  );
}
