import { useEffect } from "react";
import ReducerHook from "./ReducerHook";
import TodoListApp from "./TodoListApp";
import { TodoContext, TodoProvider } from "./context/TodoContext";

export default function Day18Lecture() {
  return (
    <TodoProvider>
      <div>
        <div>Day18Lecture</div>
        <TodoListApp />
        {/* <ReducerHook /> */}
      </div>
    </TodoProvider>
  );
}
