import React, { createContext, useReducer } from "react";
import ChildA from "./ChildA";

export const countContext = createContext(null);

function reducer(count, action) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    default:
      return count;
  }
}

export default function UseContextReduce() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <countContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        <div>
          <h1>Parent Count :{count}</h1>
        </div>
        <ChildA />
      </div>
    </countContext.Provider>
  );
}
