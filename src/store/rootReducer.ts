import { combineReducers } from "redux";
import todoReducer from "./todos/TodoSlice";
import {todoAPI} from "../services/TodoService";

export const rootReducer = combineReducers({
  todoReducer,
  [todoAPI.reducerPath]: todoAPI.reducer
});
