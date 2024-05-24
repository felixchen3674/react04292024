import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ReduxLecture() {
  const count = useSelector((state) => state.count.value);
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "add" });
  };

  return (
    <div>
      <h1>Redux Counter</h1>
      <div>Theme: {theme}</div>
      <div>Count: {count}</div>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}
