import React from "react";
import { TodoType } from "../../reducer";

interface ListItemProps {
  todo: TodoType;
  handleDelete: () => Promise<void>;
}

const TodoList: React.FC<ListItemProps> = ({ todo, handleDelete }) => {
  return (
    <li className="task">
      <span>{todo ? todo.task : ""}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoList;
