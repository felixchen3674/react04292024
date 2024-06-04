import { combineReducers } from "redux";
import { employeeTableReducer } from "../reducer";

const rootReducer = combineReducers({
  employeeTable: employeeTableReducer,
});

export default rootReducer;
