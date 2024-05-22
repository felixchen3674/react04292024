import { useEffect } from "react";
import ReducerHook from "./ReducerHook";
import TodoListApp from "./TodoListApp";

export default function Day18Lecture() {
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
      <div>Day18Lecture</div>
      {/* <TodoListApp /> */}
      <ReducerHook />
    </div>
  );
}
