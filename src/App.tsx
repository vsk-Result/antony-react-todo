import React, {FC, useEffect} from 'react';
import {TodoList} from "./components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "./store";
import {checkTodo, fetchTodos, filterTodos} from "./store/todos/actions";
import {TodoFilterBar} from "./components/TodoFilterBar";
import { TITLE } from './constants';
//мемо
export const App: FC = () => {

    // это бы все тоже хорошо в хуки вынести 

  const dispatch = useDispatch();
  const filteredTodos = useSelector((state: AppState) => state.todos.filteredTodos);
  const filterMode = useSelector((state: AppState) => state.todos.filterMode);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  // это бы тоже хорошо в хук вынести 
  const handleClickTodoItem = (id: number) => {
    dispatch(checkTodo(id));
    dispatch(filterTodos(filterMode));
  }

  // const handleClickFilterAll = () => {
  //   dispatch(filterTodos(TodosFilterTypes.FILTER_ALL));
  // }

  // const handleClickFilterCompleted = () => {
  //   dispatch(filterTodos(TodosFilterTypes.FILTER_COMPLETED));
  // }

  // const handleClickRefresh = () => {
  //   dispatch(fetchTodos());
  //   dispatch(filterTodos(TodosFilterTypes.FILTER_ALL));
  // }

  return (
    <main className="m-auto max-w-md w-full overflow-hidden">

      <h1 className="uppercase text-2xl block font-bold py-6 text-gray-700 tracking-widest text-center">
        {TITLE}
      </h1>

      <TodoList
        todos={filteredTodos}
        handleClickTodoItem={handleClickTodoItem}
      />

      <TodoFilterBar
        filterMode={filterMode}
        // handleClickFilterAll={handleClickFilterAll}
        // handleClickFilterCompleted={handleClickFilterCompleted}
        // handleClickRefresh={handleClickRefresh}
      />
    </main>
  );
}
