import { combineReducers } from "redux";
import todoReducer from "./todos/TodoSlice";

export const rootReducer = combineReducers({
  todoReducer
});
