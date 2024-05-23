// Day19.tsx
import React from "react";
import { Provider } from "react-redux";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import store from "../store"; // Import your Redux store

export default function Day19() {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
      </div>
    </Provider>
  );
}
