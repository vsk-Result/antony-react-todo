import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {ITodoItem} from "../../models/todo-item";
import {TodosFilterTypes} from "../todos/types";

interface ITodoState {
  todos: ITodoItem[],
  filteredTodos: ITodoItem[],
  filterMode: TodosFilterTypes
}

const initialState: ITodoState = {
  todos: [],
  filteredTodos: [],
  filterMode: TodosFilterTypes.FILTER_ALL
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    init: (state, action: PayloadAction<ITodoItem[]>) => {
      state.todos = action.payload;
      state.filteredTodos = action.payload;
    },
    check: (state, action: PayloadAction<number>) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo = {...todo, completed: !todo.completed};
        }
        return todo;
      })

      state.todos = updatedTodos;
      state.filteredTodos = updatedTodos;
    },
    filter: (state, action: PayloadAction<TodosFilterTypes>) => {
      switch (action.payload) {
        case TodosFilterTypes.FILTER_ALL:
          state.filteredTodos = state.todos;
          state.filterMode = TodosFilterTypes.FILTER_ALL;
          break;
        case TodosFilterTypes.FILTER_COMPLETED:
          const filteredTodos = state.todos.filter((todo) => todo.completed === true);
          state.filteredTodos = filteredTodos;
          state.filterMode = TodosFilterTypes.FILTER_COMPLETED;
          break;
      }
    },
  },
})

export const { init, check, filter } = todoSlice.actions

export default todoSlice.reducer
