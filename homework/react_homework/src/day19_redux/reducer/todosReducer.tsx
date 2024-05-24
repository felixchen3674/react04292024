import { TODOS_HANDLE_ADD, TODOS_HANDLE_DELETE, TODOS_SET } from "../constant";

export type TodoType = {
  id: string;
  task: string;
};

export type Action =
  | { type: typeof TODOS_HANDLE_ADD; payload: TodoType }
  | { type: typeof TODOS_HANDLE_DELETE; payload: string }
  | { type: typeof TODOS_SET; payload: TodoType[] };

export type State = TodoType[];

const initialState: State = [];

export const todosReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case TODOS_HANDLE_ADD:
      return [...state, action.payload];
    case TODOS_HANDLE_DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    case TODOS_SET:
      return action.payload;
    default:
      return state;
  }
};

export function setTodos(todos: TodoType[]) {
  return { type: TODOS_SET, payload: todos };
}

export function addTodo(newTodo: TodoType) {
  return { type: TODOS_HANDLE_ADD, payload: newTodo };
}

export function deleteTodo(id: string) {
  return { type: TODOS_HANDLE_DELETE, payload: id };
}
