import React from "react";
import TodoApp from "./todoApp/TodoApp";
import TodoProvider from "./todoApp/todoContext";
import TodoApp2 from "./todoAppP/TodoApp2";
import ItemContext from "./todoAppP/ContextAPI/ItemContext";

export default function Day18Play() {
  return (
    <div>
      <h1>Day 18 Play</h1>
      {/* <TodoProvider>
        <TodoApp />
      </TodoProvider> */}
      <ItemContext>
        <TodoApp2 />
      </ItemContext>
    </div>
  );
}
