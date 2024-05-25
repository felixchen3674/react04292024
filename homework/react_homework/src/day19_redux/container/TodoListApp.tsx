import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import TodoItem from "../components/TodoList/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  State,
  TodoType,
  addTodo,
  fetchTodosThunk,
} from "../reducer/todosReducer";
import { ThemeState, toggleTheme } from "../reducer/themeReducer";
import TodoList from "../components/TodoList/TodoList";

const todoAPI = "http://localhost:3000/todos";

export default function TodoListApp() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector((state: { todos: State }) => state.todos);
  const theme = useSelector((state: { theme: ThemeState }) => state.theme);

  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim()) {
      try {
        const response = await fetch(todoAPI, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ task: inputValue }),
        });
        if (response.ok) {
          const newTodo: TodoType = await response.json();
          dispatch(addTodo(newTodo));
          setInputValue("");
        } else {
          console.error("Failed to add todo:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to add todo:", error);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={theme}>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="add item..."
        />
        <button type="submit">Add</button>
      </form>
      <TodoList todos={todos} />

      <button onClick={handleToggle}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}
