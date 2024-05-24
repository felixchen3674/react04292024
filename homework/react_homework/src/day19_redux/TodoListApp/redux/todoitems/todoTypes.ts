export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export type TodoActionTypes = AddTodoAction | DeleteTodoAction;

export interface Todo {
  id: number;
  task: string;
  status: 'done' | 'not done';
}

export type TodoState = Todo[];
