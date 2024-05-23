import { createContext, useState, ReactNode, useReducer } from "react";
import { todoReducer } from "../reducer";
import { State, Action } from "../reducer";

type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
