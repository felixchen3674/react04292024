import { UUID } from "mongodb";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/todos";

interface TodoType {
  id: number;
  name: string;
  isCompleted: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [name, setName] = useState("");
  useEffect(() => {
    async function FetchData() {
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
    }
    FetchData();
  }, []);

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

    // const index = todos[todos.length - 1].id + 1;
    // const newItem = { id: index, name: name, isCompleted: false };
    // const newtodos = [...todos, newItem];
    // setTodos(newtodos);
  };
  const handleDelete = async (id: number) => {
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
  const handleEdit = async (id: number) => {
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

  return (
    <div>
      <div>
        <h1>To do List:</h1>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ADD TODO LIST"
          />
          <button onClick={handleAdd}>Add</button>
        </label>
      </div>
      <div>
        <ul>
          {todos &&
            todos.map((item) => {
              return (
                <li key={item.id}>
                  <div>
                    <h4>Name:{item.name}</h4>
                    <label>
                      <input
                        type="checkbox"
                        checked={item.isCompleted}
                        onChange={() => handleEdit(item.id)}
                      />
                      Completed
                    </label>
                    <h4>
                      Status:
                      {item.isCompleted ? "Completed" : "Not Completed"}
                    </h4>

                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
