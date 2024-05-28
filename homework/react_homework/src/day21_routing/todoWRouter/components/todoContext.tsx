import { createContext, useState } from "react";

export const ToDoContext = createContext(null);
const API_URL = "http://localhost:3000/todos";

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState<any>([]);
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState({});

  const handleAdd = async () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const date = `${year}-${month}-${day}`;
    const newItem = { task, isCompleted: false, description: "", date };
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
      const res = await response.json();
      if (res) {
        setTodos([...todos, res]);
        setTask("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      if (res) {
        const newTodos = todos.filter((item: any) => item.id !== id);
        setTodos(newTodos);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = async (id: string) => {
    // const status = todos.find((item: any) => item.id === id)?.completed;
    const status = todo.completed;
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed: !status }),
      });
      const res = await response.json();
      if (res) {
        setTodo(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const FetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (response.ok) {
        const res = await response.json();
        setTodos(res);
      } else {
        throw new Error("Something wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const FetchSingleData = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`);
      if (response.ok) {
        const res = await response.json();
        setTodo(res);
      } else {
        throw new Error("Something wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ToDoContext.Provider
      value={{
        todo,
        setTodo,
        FetchSingleData,
        todos,
        setTodos,
        setTask,
        task,
        handleAdd,
        handleDelete,
        handleEdit,
        FetchData,
      }}
    >
      <div>{children}</div>
    </ToDoContext.Provider>
  );
}
