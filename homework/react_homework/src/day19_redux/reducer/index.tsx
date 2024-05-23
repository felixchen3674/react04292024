import { HANDLE_ADD, HANDLE_DELETE, HANDLE_FETCH } from "../constant";

export type TodoType = {
  id: number;
  task: string;
};

export type Action =
  | { type: typeof HANDLE_ADD; payload: TodoType }
  | { type: typeof HANDLE_DELETE; payload: number }
  | { type: typeof HANDLE_FETCH; payload: TodoType[] };

export type State = TodoType[];

const initialState: State = [];

export const todoReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case HANDLE_ADD:
      return [...state, action.payload];
    case HANDLE_DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case HANDLE_FETCH:
      return action.payload;
    default:
      return state;
  }
};
