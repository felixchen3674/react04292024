import React from "react";
import { TodoType } from "../../reducer/todosReducer";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }: { todos: TodoType[] }) {
  return (
    <ul>
      {todos.length ? (
        todos.map((listItem) => <TodoItem key={listItem.id} todo={listItem} />)
      ) : (
        <p>No todos available</p>
      )}
    </ul>
  );
}
