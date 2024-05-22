import React, { useCallback, useMemo, useState } from "react";
import ComponentA from "./ComponentA";
import DebouncedCallback from "./DebouncedCallback";

function countDoubler(count: number) {
  // imagine that we have complex logic
  console.log("10 seconds later...");
  return count * 2;
}

export default function Day17Lecture() {
  const [bool, toggle] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect mimics the lifecycle methods

  // useMemo caches the value
  const doubleCount = useMemo(() => {
    return countDoubler(count);
  }, [count]);

  const sayHi = useMemo(() => {
    return () => {
      console.log("hello");
    };
  }, []);

  // const doubleCount = countDoubler(count);

  return <DebouncedCallback />; 

  return (
    <div>
      <h1>day 17</h1>
      <div>Double Count: {doubleCount}</div>
      <button
        onClick={() => {
          toggle((prev) => !prev);
        }}
      >
        Rerender
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>Add Count</button>
      <ComponentA count={count} sayHi={sayHi} />
    </div>
  );
}
