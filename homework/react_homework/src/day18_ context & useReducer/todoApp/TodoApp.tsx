import { useContext, useEffect } from "react";

import AddTodo from "./AddTodo";
import ToDoList from "./ToDoList";
import { ToDoContext } from "./todoContext";

export default function TodoApp() {
  const { FetchData } = useContext(ToDoContext);
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <div>
        <h1>To do List:</h1>
      </div>
      <AddTodo />
      <ToDoList />
    </div>
  );
}
