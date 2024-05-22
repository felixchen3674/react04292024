import { ReactElement, createContext, useContext, useState } from "react";
import { TodoType } from "../components/Todo";

type TodoContextType = {
  todos: TodoType[];
  handleToggleComplete: (id: number) => Promise<void>;
  handleAddTodo: (task: string) => Promise<void>;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  fetchTodos: () => Promise<void>;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

const TODO_API = "http://localhost:3000/todos";

export function TodoProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = async (task: string) => {
    const res = await fetch(TODO_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task,
        completed: false,
      }),
    });

    const newTodo = await res.json();
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggleComplete = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    const res = await fetch(`${TODO_API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !todo?.completed,
      }),
    });
    const updatedTodo = await res.json();

    setTodos((prev) =>
      prev.map((_todo) => {
        return _todo.id === id ? updatedTodo : _todo;
      })
    );
  };

  const fetchTodos = async () => {
    const res = await fetch(TODO_API);
    const data: TodoType[] = await res.json();
    setTodos(data);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleToggleComplete,
        handleAddTodo,
        newTask,
        setNewTask,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
