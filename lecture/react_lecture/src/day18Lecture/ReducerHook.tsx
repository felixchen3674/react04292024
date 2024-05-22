import React, { useReducer, useState } from "react";

const counterReducer = (count, action) => {
  switch (action.type) {
    case "add":
      return count + 1;
    case "minus":
      return count - 1;
    default:
      return count;
  }
};

export default function ReducerHook() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleAdd = () => {
    dispatch({ type: "add" });
  };

  const handleMinus = () => {
    dispatch({ type: "minus" });
  };

  return (
    <div>
      <h3>Counter</h3>
      <div>Count: {count}</div>
      <button onClick={handleAdd}>Add Count</button>
      <button onClick={handleMinus}>Minus Count</button>
    </div>
  );
}
