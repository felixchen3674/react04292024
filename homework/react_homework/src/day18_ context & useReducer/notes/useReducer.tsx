import React, { useReducer, useState } from "react";

interface StateType {
  count: number;
}
interface ActionType {
  type: "increment" | "decrement";
}

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducerFunction() {
  //   const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
    // setCount((prevCount) => prevCount - 1);
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
