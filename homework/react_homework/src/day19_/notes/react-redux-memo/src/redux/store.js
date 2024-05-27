import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
// import cakeReducer from "./cakes/cakeReducers";

// const store = createStore(cakeReducer);
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
