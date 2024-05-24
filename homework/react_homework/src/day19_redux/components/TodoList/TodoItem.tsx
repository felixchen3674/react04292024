import React from "react";
import { TodoType, deleteTodo } from "../../reducer/todosReducer";
import { useDispatch } from "react-redux";

interface ListItemProps {
  todo: TodoType;
}

const todoAPI = "http://localhost:3000/todos";

const TodoItem: React.FC<ListItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = (id: string) => async () => {
    try {
      const response = await fetch(`${todoAPI}/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        dispatch(deleteTodo(id));
      } else {
        console.error("Failed to delete todo:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };
  return (
    <li className="task">
      <span>{todo ? todo.task : ""}</span>
      <button onClick={handleDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
