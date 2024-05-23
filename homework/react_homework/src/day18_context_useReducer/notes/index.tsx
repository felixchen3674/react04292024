import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { TodoProvider } from "../context";

export default function Day18() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
