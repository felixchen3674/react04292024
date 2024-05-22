import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useTodoContext } from "./context/TodoContext";
import { useEffect } from "react";

export default function TodoListApp() {
  const { fetchTodos } = useTodoContext();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}
