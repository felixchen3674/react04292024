import React from "react";

export default function ToDo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "red" : "blue" }}>{todo.name}</span>
      <button
        onClick={() =>
          dispatch({ type: "Toggle_TODOS", payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: "Delete_TODOS", payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}
