import React, { useContext } from "react";
import { countContext } from "./UseContextReduce";

export default function GrandA() {
  const { countState, countDispatch } = useContext(countContext);
  return (
    <div>
      <button onClick={() => countDispatch({ type: "increment" })}>+</button>
      {countState}
      <button onClick={() => countDispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
