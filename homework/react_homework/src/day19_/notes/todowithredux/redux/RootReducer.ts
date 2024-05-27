import { combineReducers } from "redux";
import InputReducer from "./input/InputReducer";
import TodoReducer, { TodoType } from "./todo/TodoReducer";
import ThemeReducer, { ThemeType } from "./theme/ThemeReducer";

export interface StateType {
  todos: TodoType[];
  input: string;
  theme: ThemeType;
}
const rootReducer = combineReducers({
  todos: TodoReducer,
  input: InputReducer,
  theme: ThemeReducer,
});

export default rootReducer;
