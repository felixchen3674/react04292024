// src/components/AddTodo.tsx
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoType, State } from "../../reducer";
import { HANDLE_ADD, HANDLE_DELETE, HANDLE_FETCH } from "../../constant";
import TodoList from "../TodoList"; // Assuming you have a TodoList component
import { ThemeState } from "../../ThemReducer";
import { toggleTheme } from "../../ThemReducer";
import "./index.css";

const todoAPI = "http://localhost:3000/todos";

export default function AddTodo() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector((state: { todos: State }) => state.todos);
  const theme = useSelector((state: { theme: ThemeState }) => state.theme);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(todoAPI, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Http not found");
        }
        const todos: TodoType[] = await response.json();
        dispatch({ type: HANDLE_FETCH, payload: todos });
      } catch (err) {
        console.error("Failed to fetch todos:", err);
      }
    };

    fetchTodos();
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
          dispatch({ type: HANDLE_ADD, payload: newTodo });
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

  const handleDelete = (id: number) => async () => {
    try {
      const response = await fetch(`${todoAPI}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch({ type: HANDLE_DELETE, payload: id });
      } else {
        console.error("Failed to delete todo:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={theme}>
      <header>TODO LIST</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="add item..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.length ? (
          todos.map((listItem) => (
            <TodoList
              key={listItem.id}
              todo={listItem}
              handleDelete={handleDelete(listItem.id)}
            />
          ))
        ) : (
          <p>No todos available</p>
        )}
      </ul>
      <button onClick={handleToggle}>
        Switch to {theme === "light" ? "dark" : "light"} theme
      </button>
    </div>
  );
}
