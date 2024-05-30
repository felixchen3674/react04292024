import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { TodosType } from "../../reducer/toDoReducer";
import { deleteTodoAsync } from "../../reducer/toDoReducer";

export default function TodoDetails() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const todos = useSelector((state) => state.todos as TodosType[]);
  const todo = todos.find((toDoItem) => id === toDoItem.id);
  const dispatch = useDispatch();

  useEffect(() => {
    // Any side effect you want to run when id changes
    console.log(`Todo ID: ${id}`);
  }, [id]);

  const handleRemove = () => {
    dispatch(deleteTodoAsync(id));
    history.push("/");
  };

  return (
    <div>
      <h1>To do Details</h1>
      <p>
        <strong>ID: </strong>
        {todo?.id}
      </p>
      <p>
        <strong>Text: </strong>
        {todo?.text}
      </p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
