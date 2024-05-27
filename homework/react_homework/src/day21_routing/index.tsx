import TodoApp from "./todoWRouter/todoApp";
import TodoProvider from "./todoWRouter/todoContext";

export default function Day21Play() {
  return (
    <div>
      <h1>Day 21 Play</h1>
      <Routes>
        <Route to={"/"} component={Home} />
        <Route to={"/todo/:id"} component={SingleTodo} />
      </Routes>
    </div>
  );
}
