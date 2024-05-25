import { TODOS_HANDLE_ADD, TODOS_HANDLE_DELETE, TODOS_SET } from "../constant";
import { startLoading, stopLoading } from "./loadingReducer";

const TODOS_API_URL = "http://localhost:3000/todos";

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

export function fetchTodosThunk() {
  return async function thunkExample(dispatch) {
    dispatch(startLoading());
    try {
      await wait();
      const response = await fetch(TODOS_API_URL);

      const todos: TodoType[] = await response.json();

      dispatch(setTodos(todos));
    } catch (err) {
      console.error("Failed to fetch todos:", err);
    } finally {
      dispatch(stopLoading());
    }
  };
}

export const deleteTodoThunk = (id: string) => async (dispatch) => {
  try {
    const response = await fetch(`${TODOS_API_URL}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();

    dispatch(deleteTodo(id));
  } catch (error) {
    console.error("Failed to delete todo:", error);
  }
};

async function wait(time = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res(null);
    }, time);
  });
}
