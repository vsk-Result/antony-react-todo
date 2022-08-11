import React from 'react';
import {FC} from "react";
import {TodoFilterButton} from "./TodoFilterButton";
import {TodosFilterTypes} from "../store/todos/types";

interface TodoFilterBarProps {
  filterMode: string,
  handleClickFilterAll: any,
  handleClickFilterCompleted: any,
  handleClickRefresh: any,
}

export const TodoFilterBar: FC<TodoFilterBarProps> = ({ filterMode, handleClickFilterAll , handleClickFilterCompleted, handleClickRefresh}: TodoFilterBarProps) => {
  return (
    <div className="flex py-4 border-t border-gray-900 justify-between">
      <div>
        <TodoFilterButton
          text={'Все'}
          isActive={filterMode === TodosFilterTypes.FILTER_ALL}
          clickHandler={handleClickFilterAll}
        />

        <TodoFilterButton
          text={'Завершенные'}
          isActive={filterMode === TodosFilterTypes.FILTER_COMPLETED}
          clickHandler={handleClickFilterCompleted}
        />
      </div>
      <div>
        <button
          className="text-xs mr-3 text-blue-500 focus:outline-none hover:underline"
          onClick={() => handleClickRefresh()}
        >
          Обновить список
        </button>
      </div>
    </div>
  );
}
