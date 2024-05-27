import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducers";
import icecreamReducer from "./iceCream/icecreamReducer";
import { reducer } from "./userReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  icecream: icecreamReducer,
  users: reducer,
});

export default rootReducer;
