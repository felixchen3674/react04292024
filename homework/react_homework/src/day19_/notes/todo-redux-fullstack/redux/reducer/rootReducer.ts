import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import themeReducer from "./themeReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
});
