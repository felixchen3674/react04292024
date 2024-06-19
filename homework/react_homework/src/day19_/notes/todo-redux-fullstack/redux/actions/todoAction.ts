import { todoType } from "../../../../../day18_ context & useReducer/todoAppP/ContextAPI/ItemContext";

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";
export const SET_ITEM = "SET_ITEM";

export interface AddAction {
  type: typeof ADD_ITEM;
  payload: todoType;
}

export interface DeleteAction {
  type: typeof DELETE_ITEM;
  payload: string;
}
export interface EditAction {
  type: typeof EDIT_ITEM;
  payload: string;
}
export interface SetAction {
  type: typeof SET_ITEM;
  payload: todoType[];
}

export type todoAction = AddAction | DeleteAction | EditAction | SetAction;

export const addItem = (newTodo: todoType) => {
  return {
    type: ADD_ITEM,
    payload: newTodo,
  };
};

export const deleteItem = (id: string) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
};

export const editItem = (id: string) => {
  return {
    type: EDIT_ITEM,
    payload: id,
  };
};

export const setItem = (newTodos: todoType[]) => {
  return {
    type: SET_ITEM,
    payload: newTodos,
  };
};
