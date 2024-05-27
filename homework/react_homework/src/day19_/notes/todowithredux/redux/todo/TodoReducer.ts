import { TodoActionTypes } from "./TodoActionTypes";

export interface TodoType {
  id: string;
  name: string;
  isCompleted: boolean;
}
const initialState: TodoType[] = [];

const TodoReducer = (todos = initialState, action: any) => {
  switch (action.type) {
    case TodoActionTypes.ADD_ITEM:
      return [...todos, action.payload];
    case TodoActionTypes.EDIT_ITEM:
      return todos.map((item) => {
        if (item.id === action.payload.id) {
          const newItem = { ...item };
          newItem.isCompleted = action.payload.isCompleted;
          return newItem;
        }
        return item;
      });
    case TodoActionTypes.DELETE_ITEM:
      return todos.filter((item) => item.id !== action.payload);
    case TodoActionTypes.SET_ITEM:
      return action.payload;
    default:
      return todos;
  }
};

export default TodoReducer;
