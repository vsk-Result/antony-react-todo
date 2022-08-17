import {AppDispatch} from "../index";
import {ITodoItem} from "../../models/todo-item";
import {todoSlice} from "./TodoSlice";

export const fetchTodos = () => async (dispatch: AppDispatch) => {
  // try {
  //   const todosCount = 5;
  //   const todosResponse = await TodoService.getTodos();
  //   const imagesResponse = await TodoService.getImages();
  //
  //   const todos = shuffle(todosResponse.data).slice(0, todosCount);
  //   const images = shuffle(imagesResponse.data).slice(0, todosCount);
  //
  //   todos.forEach((todo: ITodoItem, i: number) => {
  //     todo.imageUrl = images[i].thumbnailUrl;
  //   })
  //
  //   dispatch(todoSlice.actions.init(todos));
  // } catch (e) {
  //   console.log('Todo fetch error: ' + e);
  // }
}
