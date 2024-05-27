import TodoApp from "./todoApp/TodoApp";
import TodoProvider from "./todoApp/todoContext";

export default function Day18Play() {
  return (
    <div>
      <h1>Day 18 Play</h1>
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}
