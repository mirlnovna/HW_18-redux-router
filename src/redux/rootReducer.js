import { combineReducers } from "redux";
import { AuthReducer } from "../redux/todo-list/reducers/AuthReducer";
import { operationsReducer } from "../redux/todo-list/reducers/operationsReducer";

export const rootReducer = combineReducers({
  operationsReducer,
  auth: AuthReducer,
});
