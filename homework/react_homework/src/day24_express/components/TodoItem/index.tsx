import React from "react";
import { Link } from "react-router-dom";

interface TodoItemProps {
  text: string;
  id: string;
}

export default function TodoItem({ text, id }: TodoItemProps) {
  return (
    <li>
      <Link to={`/todos/${id}`}>{text}</Link>
    </li>
  );
}
