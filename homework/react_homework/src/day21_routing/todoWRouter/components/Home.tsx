import React, { useEffect, useState } from "react";
import { FetchData } from "../api/helper";

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    async function Fetch() {
      const res = await FetchData();
      if (res.ok) {
        setTodos(res);
      }
    }
    Fetch();
  }, []);
  return (
    <div>
      {todos &&
        todos.map((item) => {
          return (
            <div>
              <button>{item.name}</button>
              <h4>Status: {item.isCompleted ? "Completed" : "ImCompleted"}</h4>
            </div>
          );
        })}
    </div>
  );
}
