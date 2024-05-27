import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { TodoContext } from "../../contexts/TodoContext";

export default function TodoDetails() {
  const { id } = useParams<{ id: string }>();
  const { state, updateTodo, deleteTodo } = useContext(TodoContext);
  const history = useHistory();

  const todo = state.todos.find((todo) => todo.id === id);

  const handleUpdate = async () => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    await updateTodo(updatedTodo);
  };

  const handleDelete = async () => {
    await deleteTodo(todo.id);
    history.push("/");
  };

  return (
    <div>
      <h1>Todo Details</h1>
      <p>
        <strong>Task:</strong> {todo.task}
      </p>
      <p>
        <strong>Description:</strong> {todo.description}
      </p>
      <p>
        <strong>Date:</strong> {todo.date}
      </p>
      <p>
        <strong>Status:</strong> {todo.completed ? "Completed" : "Incomplete"}
      </p>
      <button onClick={handleUpdate}>
        {todo.completed ? "Mark as Incomplete" : "Mark as Completed"}
      </button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => history.push("/")}>Back to List</button>
    </div>
  );
}
