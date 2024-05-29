import React, { useState } from "react";
export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      <h1>
        Count:
        <h3 data-testId="count">{count}</h3>
      </h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={restart}>restart</button>
      <button onClick={switchSigns}>switchSigns</button>
    </div>
  );
}
