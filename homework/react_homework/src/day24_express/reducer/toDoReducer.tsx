import { AppDispatch } from "../../ReduxTodoSolution/redux/store";
import { ADD, DELETE, SET } from "../constants";

export type TodosType = {
  id: string;
  text: string;
};

type AddType = {
  type: typeof ADD;
  payload: TodosType;
};

type DeleteType = {
  type: typeof DELETE;
  payload: string;
};

type SetType = {
  type: typeof SET;
  payload: TodosType[];
};

type ActionType = AddType | DeleteType | SetType;

const initialState: TodosType[] = [];

const toDoReducer = (todos: TodosType[] = initialState, action: ActionType) => {
  switch (action.type) {
    case ADD:
      return [...todos, action.payload];
    case DELETE:
      return todos.filter((todo) => todo.id !== action.payload);
    case SET:
      return action.payload;
    default:
      return todos;
  }
};

const add = (todo: TodosType): AddType => {
  return {
    type: ADD,
    payload: todo,
  };
};

const remove = (id: string): DeleteType => {
  return {
    type: DELETE,
    payload: id,
  };
};

const setTodo = (todos: TodosType[]) => {
  return {
    type: SET,
    payload: todos,
  };
};

export const fetchTodoAsync = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("http://localhost:3000/api/todos");
    const data = await response.json();
    dispatch(setTodo(data));
  } catch (err) {
    console.log(err);
  }
};

export const addTodoAsync = (text: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });
    const newTodo = await response.json();
    console.log(newTodo);
    dispatch(add(newTodo));
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodoAsync =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
      });
      dispatch(remove(id));
    } catch (err) {
      console.log(err);
    }
  };

export { toDoReducer, add, remove };
