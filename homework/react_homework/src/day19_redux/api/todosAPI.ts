import { TodoType } from "../reducer/todosReducer";

const TODOS_API_URL = "http://localhost:3000/todos";

export const fetchTodos = async () => {
  try {
    const response = await fetch(TODOS_API_URL);
    if (!response.ok) {
      throw new Error("Http not found");
    }
    const todos: TodoType[] = await response.json();
    return todos;
  } catch (err) {
    console.error("Failed to fetch todos:", err);
  }
};
