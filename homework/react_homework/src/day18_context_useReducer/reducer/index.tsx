import { HANDLE_ADD, HANDLE_DELETE } from "../constant";

export type TodoType = {
  id: number;
  task: string;
};

export type Action =
  | { type: typeof HANDLE_ADD; payload: TodoType }
  | { type: typeof HANDLE_DELETE; payload: number };

export type State = TodoType[];

export const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case HANDLE_ADD:
      return [...state, action.payload];
    case HANDLE_DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      throw new Error("Unhandled action type");
  }
};
