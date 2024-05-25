import React from "react";
import { TodoType, deleteTodoThunk } from "../../reducer/todosReducer";
import { useDispatch } from "react-redux";

interface ListItemProps {
  todo: TodoType;
}

const TodoItem: React.FC<ListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => () => {
    dispatch(deleteTodoThunk(id));
  };
  return (
    <li className="task">
      <span>{todo ? todo.task : ""}</span>
      <button onClick={handleDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
