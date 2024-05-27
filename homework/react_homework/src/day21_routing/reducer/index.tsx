import React, { createContext, useReducer, useEffect } from "react";
import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants";

export type ToDoListType = {
  id: string;
  task: string;
  completed: boolean;
  date: string;
  description: string;
};

export type StateType = {
  todos: ToDoListType[];
};

type ActionType =
  | { type: "ADD_TODO"; payload: ToDoListType }
  | { type: "UPDATE_TODO"; payload: ToDoListType }
  | { type: "DELETE_TODO"; payload: string };

export const toDoReducer = (
  state: StateType,
  action: ActionType
): StateType => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
