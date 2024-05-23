// AddTodo.tsx
import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
} from "react";
import TodoList from "../TodoList";
import { TodoContext } from "../../context";
import { HANDLE_ADD, HANDLE_DELETE } from "../../constant";
import { TodoType } from "../../reducer";

const todoAPI = "http://localhost:3000/todos";

export default function AddTodo() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("AddTodo must be used within a TodoProvider");
  }

  const { state, dispatch } = context;
  const [inputValue, setInputValue] = useState<string>("");

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
        todos.forEach((todo: TodoType) =>
          dispatch({ type: HANDLE_ADD, payload: todo })
        );
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

  return (
    <div>
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
        {state.length ? (
          state.map((listItem) => (
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
    </div>
  );
}
