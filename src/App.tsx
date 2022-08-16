import React, {FC, useEffect} from 'react';
import {TodoList} from "./components/TodoList";
import {RootState} from "./store";
import {TodoFilterBar} from "./components/TodoFilterBar";
import {TodosFilterTypes} from "./store/todos/types";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {todoSlice} from "./store/todos/TodoSlice";
import {fetchTodos} from "./store/todos/ActionCreators";

export const App: FC = () => {

  const dispatch = useAppDispatch();
  const {filteredTodos, filterMode} = useAppSelector((state: RootState) => state.todoReducer);
  const {check, filter} = todoSlice.actions;

  useEffect(() => {
    dispatch(fetchTodos());
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
    dispatch(fetchTodos());
    dispatch(filter(TodosFilterTypes.FILTER_ALL));
  }

  return (
    <main className="m-auto max-w-md w-full overflow-hidden">
      <h1 className="uppercase text-2xl block font-bold py-6 text-gray-700 tracking-widest text-center">
        Todo для великого Тони Махони от Влада Кадони
      </h1>

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
    </main>
  );
}
