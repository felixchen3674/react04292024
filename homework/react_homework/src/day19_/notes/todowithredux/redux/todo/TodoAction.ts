import { TodoActionTypes } from "./TodoActionTypes";
import { TodoType } from "./TodoReducer";

const addTodo = (newTodo: TodoType) => {
  return {
    type: TodoActionTypes.ADD_ITEM,
    payload: newTodo,
  };
};
const deleteTodo = (id: string) => {
  return {
    type: TodoActionTypes.DELETE_ITEM,
    payload: id,
  };
};
const setTodo = (newTodos: TodoType[]) => {
  return {
    type: TodoActionTypes.SET_ITEM,
    payload: newTodos,
  };
};
const editTodo = (todo: TodoType) => {
  return {
    type: TodoActionTypes.EDIT_ITEM,
    payload: { id: todo.id, isCompleted: todo.isCompleted },
  };
};

const TodoActions = {
  addTodo,
  deleteTodo,
  setTodo,
  editTodo,
};
export default TodoActions;
