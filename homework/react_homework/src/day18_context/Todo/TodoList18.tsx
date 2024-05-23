import { useState, useReducer, useEffect } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  SET_TODOS: "set-todos",
};

const URL = "http://localhost:3001/todos";

interface TodoType {
  id: number;
  name: string;
  complete: boolean;
}

type ActionType =
  | { type: "add-todo"; payload: { name: string } }
  | { type: "toggle-todo"; payload: { id: number } }
  | { type: "delete-todo"; payload: { id: number } }
  | { type: "set-todos"; payload: TodoType[] };

function reducer(todos: TodoType[], action: ActionType): TodoType[] {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, action.payload];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: action.payload.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.SET_TODOS:
      return action.payload;
    default:
      return todos;
  }
}

function newTodo(name: string): TodoType {
  return { id: String(Date.now()), name: name, complete: false };
}

function TodoList18() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        dispatch({ type: ACTIONS.SET_TODOS, payload: data });
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchTodos();
  }, []);

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const todo = newTodo(name);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      const data = await response.json();
      dispatch({ type: ACTIONS.ADD_TODO, payload: data });
      setName("");
      console.log("Todo added:", data);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  }

  async function handleToggle(todo) {
    const updatedTodo = { ...todo, complete: !todo.complete };
    try {
      const url = `${URL}/${todo.id}`;
      console.log("Toggle URL:", url);
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      const data = await response.json();
      dispatch({ type: ACTIONS.TOGGLE_TODO, payload: data });
      console.log("Todo toggled:", data);
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  }

  async function handleDelete(id: number) {
    try {
      const url = `${URL}/${id}`;
      console.log("Delete URL:", url);
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
      dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } });
      console.log("Todo deleted:", id);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            handleToggle={() => handleToggle(todo)}
            handleDelete={() => handleDelete(todo.id)}
          />
        );
      })}
    </>
  );
}

export default TodoList18;