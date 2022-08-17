import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {RootState} from "../store";
import {todoSlice} from "../store/todos/TodoSlice";
import {TodosFilterTypes} from "../store/todos/types";
import {TodoList} from "./TodoList";
import {TodoFilterBar} from "./TodoFilterBar";
import {todoAPI} from "../services/TodoService";

export const TodoContainer: FC = () => {
  const dispatch = useAppDispatch();
  const {filteredTodos, filterMode} = useAppSelector((state: RootState) => state.todoReducer);
  const {check, filter, init} = todoSlice.actions;
  const {data: todos = [], isError, isLoading, refetch, isFetching} = todoAPI.useFetchAllTodosQuery(5);

  useEffect(() => {
    dispatch(init(todos));
  }, []);

  const handleClickTodoItem = (id: number) => {
    dispatch(check(id));
    dispatch(filter(filterMode));
  }

  const handleClickFilterAll = () => {
    dispatch(filter(TodosFilterTypes.FILTER_ALL));
  }

  const handleClickFilterCompleted = () => {
    dispatch(filter(TodosFilterTypes.FILTER_COMPLETED));
  }

  const handleClickRefresh = () => {
    refetch();
    dispatch(filter(TodosFilterTypes.FILTER_ALL));
  }

  if (isError) return <h1>Произошла ошибка при загрузке...</h1>;

  if (isLoading || isFetching) return <h1>Идет загрузка задач...</h1>;

  return (
    <>
      <TodoList
        todos={filteredTodos}
        handleClickTodoItem={handleClickTodoItem}
      />

      <TodoFilterBar
        filterMode={filterMode}
        handleClickFilterAll={handleClickFilterAll}
        handleClickFilterCompleted={handleClickFilterCompleted}
        handleClickRefresh={handleClickRefresh}
      />
    </>
  );
};
