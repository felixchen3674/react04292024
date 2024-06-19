import { useContext } from "react";
import ToDo from "./ToDo";
import { ToDoContext } from "./todoContext";
import React from "react";

export default function ToDoList() {
  const { todos } = useContext(ToDoContext);
  return (
    <div>
      <ul>
        {todos &&
          todos.map((item) => {
            return <ToDo key={item.id} item={item} />;
          })}
      </ul>
    </div>
  );
}
