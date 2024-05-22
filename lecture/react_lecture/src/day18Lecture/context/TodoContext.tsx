import { ReactElement, createContext, useContext, useState } from "react";
import { TodoType } from "../components/Todo";

type TodoContextType = {
  todos: TodoType[];
  handleToggleComplete: (id: number) => void;
  handleAddTodo: (task: string) => void;
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
};

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

const initialTodos = [
  { id: 1, task: "cook", completed: false },
  { id: 2, task: "play", completed: true },
];

export function TodoProvider({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  const [newTask, setNewTask] = useState("");
  const [todos, setTodos] = useState(initialTodos);

  

  const handleAddTodo = (task: string) => {
    const newId = todos[todos.length - 1].id + 1;

    const newTodo: TodoType = {
      id: newId,
      task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const handleToggleComplete = (id: number) => {
    const _todos = [...todos];
    const todo = _todos.find((todo) => todo.id === id);
    todo!.completed = !todo!.completed;
    setTodos(_todos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        handleToggleComplete,
        handleAddTodo,
        newTask,
        setNewTask,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
