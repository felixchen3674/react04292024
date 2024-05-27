import { createContext, useReducer, useState } from "react";

export const ToDoContext = createContext(null);
const API_URL = "http://localhost:3000/todos";
export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");

  const handleAdd = async () => {
    const newItem = { name, isCompleted: false };
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
        setName("");
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
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = async (id: string) => {
    const status = todos.find((item) => item.id === id)?.isCompleted;
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted: !status }),
      });
      const res = await response.json();
      if (res) {
        const newTodos = todos.map((item) => {
          if (item.id === id) {
            const newItem = { ...item };
            newItem.isCompleted = !newItem.isCompleted;
            return newItem;
          }
          return item;
        });
        setTodos(newTodos);
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
  return (
    <ToDoContext.Provider
      value={{
        todos,
        setTodos,
        setName,
        name,
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
