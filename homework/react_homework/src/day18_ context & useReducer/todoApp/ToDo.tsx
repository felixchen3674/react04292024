import { useContext } from "react";
import { CheckBox } from "./CheckBox";
import { ToDoContext } from "./todoContext";
import React from "react";

export interface TodoType {
  id: number;
  name: string;
  isCompleted: boolean;
}
export default function ToDo({ item }: TodoType) {
  const { id, name, isCompleted } = item;
  const { handleEdit, handleDelete } = useContext(ToDoContext);
  return (
    <div>
      <li>
        <div>
          <h4>Name:{name}</h4>
          <CheckBox checked={isCompleted} onChange={() => handleEdit(id)} />
          <h4>
            Status:
            {isCompleted ? "Completed" : "Not Completed"}
          </h4>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </li>
    </div>
  );
}
