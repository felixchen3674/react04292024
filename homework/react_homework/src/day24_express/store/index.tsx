import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { toDoReducer } from "../reducer/toDoReducer";

export const store = createStore(toDoReducer, applyMiddleware(thunk));
