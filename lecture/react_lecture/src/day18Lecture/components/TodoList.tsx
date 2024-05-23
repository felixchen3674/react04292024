import Todo from "./Todo";
import { useTodoContext } from "../context/TodoContext";

export default function TodoList() {
  const { todos, handleToggleComplete } = useTodoContext();

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} todo={todo} handleToggle={handleToggleComplete} />
        );
      })}
    </ul>
  );
}
