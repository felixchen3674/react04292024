import { useReducer, useState } from "react";
import ToDo from "./ToDo";
import React from "react";
function reducer(todos, action) {
  switch (action.type) {
    case "Add_TODOS":
      return [...todos, newTodo(action.payload.name)];
    case "Toggle_TODOS":
      //   for(todos.id === action.payload.id){
      //     [...todos,complete:!todos.complete]
      return todos.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      });
    case "Delete_TODOS":
      return todos.filter((item) => item.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function UseReducer2() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "Add_TODOS", payload: { name: name } });
    setName("");
  }
  console.log(todos);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}
