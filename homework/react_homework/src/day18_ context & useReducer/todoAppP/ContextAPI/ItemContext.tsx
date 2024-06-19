import React, { createContext, useReducer, useRef, useCallback } from "react";
import { Action } from "redux";

export const todoContext = createContext<todoContextType | null>(null);

export interface todoContextType {
  inputRef: React.RefObject<HTMLInputElement>;
  items: todoType[];

  dispatch: React.Dispatch<Action>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDelete: (itemId: string) => void;
  handleOnChange: (itemId: string) => void;
}

export interface todoType {
  id: string;
  task: string;
  completed: boolean;
  date: string;
  description: string;
}

function todoReducer(state: todoType[], action: any) {
  switch (action.type) {
    case "InitialData":
      return action.payload;
    case "AddData":
      return (state = [...state, action.payload]);
    case "DeleteData":
      return action.payload;
    case "EditData":
      return action.payload;
    default:
      return state;
  }
}

export default function ItemContext({ children }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [items, dispatch] = useReducer(todoReducer, []);

  const handleAdd = async (e) => {
    console.log("handleAdd");
    if (items) {
      e.preventDefault();
      let input = inputRef.current?.value || "";
      if (input === "") {
        alert("please enter input");
        return;
      }
      const newItem = {
        task: input,
        completed: false,
        date: new Date(),
        description: "",
      };
      try {
        const response = await fetch("http://localhost:3000/todos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });
        const res = await response.json();
        dispatch({ type: "AddData", payload: res });
        if (inputRef.current) inputRef.current.value = "";
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleOnChange = async (itemId: string) => {
    if (items) {
      const target = items.find((item) => item.id === itemId);
      if (target) {
        try {
          const response = await fetch(
            `http://localhost:3000/todos/${itemId}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ completed: !target.completed }),
            }
          );
          const res = await response.json();
          const newItems = items.map((item) => {
            if (item.id === itemId) {
              const newItem = { ...item };
              newItem.completed = !item.completed;
              return newItem;
            }
            return item;
          });

          dispatch({ type: "EditData", payload: newItems });
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return;
    }
  };

  const handleDelete = async (itemId: string) => {
    if (items) {
      try {
        const newItems = items.filter((item) => item.id !== itemId);
        dispatch({ type: "DeleteData", payload: newItems });
        const response = await fetch(`http://localhost:3000/todos/${itemId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const res = await response.json();
        if (res) {
          console.log(res);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  return (
    <todoContext.Provider
      value={{
        inputRef,
        items,
        dispatch,
        handleAdd,
        handleDelete,
        handleOnChange,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}
