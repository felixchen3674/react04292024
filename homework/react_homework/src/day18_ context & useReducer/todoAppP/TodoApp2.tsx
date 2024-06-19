import React, { useContext, useEffect, useRef, useState } from "react";

import AddInput from "./components/AddInput";
import TodoList from "./components/TodoList";
import { Fetch } from "./components/helper";
import { todoContext, todoContextType } from "./ContextAPI/ItemContext";

export default function TodoApp2() {
  // const { setItems } = useContext(todoContext);
  const { dispatch } = useContext(todoContext) as todoContextType;
  useEffect(() => {
    async function fetchData() {
      const result = await Fetch();
      dispatch({ type: "InitialData", payload: result });
    }
    fetchData();
  }, []);

  return (
    <div>
      <AddInput />
      <TodoList />
    </div>
  );
}
