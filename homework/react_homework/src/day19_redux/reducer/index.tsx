import { combineReducers } from "redux";

import { themeReducer } from "./themeReducer";
import { todosReducer } from "./todosReducer";
import loadingReducer from "./loadingReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
  loading: loadingReducer,
});
