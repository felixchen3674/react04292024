// import React, { createContext, useReducer } from "react";

// export const countContext = createContext(null);

// function reducer(count, action) {
//   switch (action.type) {
//     case "increment":
//       return count + 1;
//     case "decrement":
//       return count - 1;
//     default:
//       return count;
//   }
// }

// export default function UseContextReduce({ children }) {
//   const [count, dispatch] = useReducer(reducer, 0);
//   return (
//     <countContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       {children}
//       {/* <div>
//         <div>
//           <h1>Parent Count :{count}</h1>
//         </div>
//         <ChildA />
//       </div> */}
//     </countContext.Provider>
//   );
// }

import React, { createContext, useReducer } from "react";
import ParentA from "./ParentA";
import { Action } from "redux";

interface actionType {
  type: string;
  payload?: any;
}

function reducer(count: number, action: actionType) {
  switch (action.type) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    default:
      return count;
  }
}

export const countContext = createContext<CountContextType | null>(null);

interface CountContextType {
  countState: number;
  countDispatch: React.Dispatch<Action>;
}
export default function UseContextReduce() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <countContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <ParentA />
    </countContext.Provider>
  );
}
