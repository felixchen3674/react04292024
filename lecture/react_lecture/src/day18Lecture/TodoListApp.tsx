import TodoList from "./components/TodoList"
import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";

export default function TodoListApp() {
  return (
    <TodoProvider>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}
