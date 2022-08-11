import {ITodoItem} from "../../models/todo-item";

export enum TodosTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  INIT_TODOS = 'INIT_TODOS',
  CHECK_TODO = 'CHECK_TODO',
  FILTER_TODOS = 'FILTER_TODOS',
}

export enum TodosFilterTypes {
  FILTER_ALL = 'FILTER_ALL',
  FILTER_COMPLETED = 'FILTER_COMPLETED',
}

interface IFetchTodos {
  type: TodosTypes.FETCH_TODOS
}

interface IInitTodos {
  type: TodosTypes.INIT_TODOS,
  payload: ITodoItem[]
}

interface ICheckTodo {
  type: TodosTypes.CHECK_TODO,
  payload: number
}

interface IFilterTodos {
  type: TodosTypes.FILTER_TODOS,
  payload: string
}

export type TodosActionTypes =
  | IFetchTodos
  | IInitTodos
  | ICheckTodo
  | IFilterTodos;
