import React, { Component, useContext } from "react";
import { todoContext } from "../ContextAPI/ItemContext";
import CheckBox1 from "./CheckBox1";

export default function TodoList() {
  const { items, handleDelete, handleOnChange } = useContext(todoContext);

  return (
    <div>
      {items &&
        items.map((item) => {
          const { id, task, completed } = item;
          return (
            <div key={id}>
              <h4>Todo Task: {task}</h4>
              <h4>Status : {completed ? "completed" : "imCompleted"}</h4>
              <CheckBox1
                checked={completed}
                onChange={() => handleOnChange(id)}
              />
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}
