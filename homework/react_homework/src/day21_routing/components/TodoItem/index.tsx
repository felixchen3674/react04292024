import React, { useContext } from "react";
import { Link } from "react-router-dom";

interface TodoItem {
  toDoItem: string;
  id: number;
}

export default function TodoItem({ toDoItem, id }: TodoItem) {
  return (
    <li>
      <Link to={`/todos/${id}`}>{toDoItem}</Link>
    </li>
  );
}
