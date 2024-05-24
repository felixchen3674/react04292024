import {
  ADD_TODO,
  DELETE_TODO,
  AddTodoAction,
  DeleteTodoAction,
} from './todoTypes';

export const addTodo = (task: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: task,
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});
