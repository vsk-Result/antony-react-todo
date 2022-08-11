import {Reducer} from "redux";
import {ITodoItem} from "../../models/todo-item";
import {TodosFilterTypes, TodosTypes} from "./types";

const initialState = {
  todos: [],
  filteredTodos: [],
  filterMode: TodosFilterTypes.FILTER_ALL
};

interface IState {
  todos: ITodoItem[],
  filteredTodos: ITodoItem[],
  filterMode: TodosFilterTypes
}

export const TodosReducers: Reducer<IState> = (state = initialState, action) => {
  switch (action.type) {
    case TodosTypes.INIT_TODOS:
      return { ...state, todos: action.payload, filteredTodos: action.payload}
    case TodosTypes.CHECK_TODO:
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo = {...todo, completed: !todo.completed}
        }
        return todo;
      })
      return { ...state, todos: updatedTodos, filteredTodos: updatedTodos }
    case TodosTypes.FILTER_TODOS:
      switch (action.payload) {
        case TodosFilterTypes.FILTER_ALL:
          return {
            ...state,
            filteredTodos: state.todos,
            filterMode: TodosFilterTypes.FILTER_ALL
          }
        case TodosFilterTypes.FILTER_COMPLETED:
          const filteredTodos = state.todos.filter((todo) => todo.completed === true);
          return {
            ...state,
            filteredTodos: filteredTodos,
            filterMode: TodosFilterTypes.FILTER_COMPLETED
          }
        default:
          return state;
      }
    default:
      return state;
  }
}
