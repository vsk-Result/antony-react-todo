import { combineReducers } from "redux";
import {TodosReducers} from "./todos/reducers";

export const rootReducer = combineReducers({
  todos: TodosReducers
});
