import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";
import themReducer from "./reducers/themeReducer";

const reducer = combineReducers({ count: countReducer, theme: themReducer });

export const store = createStore(reducer);
