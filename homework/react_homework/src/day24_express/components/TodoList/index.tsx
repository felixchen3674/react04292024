import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodosType } from "../../reducer/toDoReducer";
import { fetchTodoAsync, addTodoAsync } from "../../reducer/toDoReducer";
import TodoItem from "../TodoItem";

export default function TodoList() {
  const [toDoValue, setTodoValue] = useState<string>("");
  const todos = useSelector((state) => state.todos as TodosType[]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodoAsync());
  }, [dispatch]);

  const handleChange = (e: React.FormEvent) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodoAsync(toDoValue));
    setTodoValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={toDoValue} onChange={handleChange} />
        </label>
        <button>Submit</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} text={todo.text} id={todo.id} />;
        })}
      </ul>
    </>
  );
}
