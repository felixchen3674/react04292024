import { combineReducers } from "redux";

import { themeReducer } from "./themeReducer";
import { todosReducer } from "./todosReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
});
