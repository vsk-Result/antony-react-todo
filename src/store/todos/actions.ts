import {TodosActionTypes, TodosTypes} from "./types";
import {AppDispatch} from "../index";
import TodoService from "../../api/TodoService";
import {ITodoItem} from "../../models/todo-item";
import {shuffle} from "../../util/common";

// any по-хорошему не должно быть, нужно точно определять тип
export const fetchTodos: any = () => async (dispatch: AppDispatch) => {
  try {
    const todosCount = 5;
    const todosResponse = await TodoService.getTodos();
    const imagesResponse = await TodoService.getImages();

    const todos = shuffle(todosResponse.data).slice(0, todosCount);
    const images = shuffle(imagesResponse.data).slice(0, todosCount);

    todos.forEach((todo: ITodoItem, i: number) => {
      todo.imageUrl = images[i].thumbnailUrl;
    })

    dispatch(initTodos(todos));
  } catch (e) {
    console.log('Todo fetch error: ' + e);
  }
}

export const initTodos = (payload: ITodoItem[]): TodosActionTypes => {
  return {
    type: TodosTypes.INIT_TODOS,
    payload
  }
}

export const checkTodo = (payload: number): TodosActionTypes => {
  return {
    type: TodosTypes.CHECK_TODO,
    payload
  }
}

export const filterTodos = (payload: string): TodosActionTypes => {
  return {
    type: TodosTypes.FILTER_TODOS,
    payload
  }
}
