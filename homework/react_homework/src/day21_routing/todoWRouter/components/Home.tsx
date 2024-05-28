import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToDoContext } from "./todoContext";
import AddTodo from "./AddTodo";

export default function Home() {
  const { FetchData, todos } = useContext(ToDoContext);
  useEffect(() => {
    FetchData();
  }, []);
  console.log(todos);
  return (
    <div>
      <div>
        <AddTodo />
      </div>
      {todos &&
        todos.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/todo/${item.id}`}>
                Task:{item.task} Status:
                {item.completed ? "completed" : "imcompleted"}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
