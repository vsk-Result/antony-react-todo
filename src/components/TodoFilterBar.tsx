import React, { memo } from 'react';
import {FC} from "react";
import {TodoFilterButton} from "./TodoFilterButton";
import {TodosFilterTypes} from "../store/todos/types";
import { REFRESH_LIST } from '../constants';
import { useClickFilterHandlers } from '../hooks/useHandleClickFilter';

type TodoFilterBarProps = {
  filterMode: string;
  // handleClickFilterAll: VoidFunction;
  // handleClickFilterCompleted: VoidFunction;
  // handleClickRefresh: VoidFunction;
}
// на проекте по стайлгайду нужно все компоненты в мемо оборачинать, ну это ты потом ознакомишься
export const TodoFilterBar: FC<TodoFilterBarProps> =  memo((props) => {
  // это как пример, когда много пропсов, то лучше так делать.
  // const { filterMode, 
  //         handleClickFilterAll, 
  //         handleClickFilterCompleted, 
  //         handleClickRefresh, 
  //       } = props;

  const {handleClickFilterAll, handleClickFilterCompleted, handleClickRefresh } = useClickFilterHandlers();

  return (
    <div className="flex py-4 border-t border-gray-900 justify-between">
      <div>
        <TodoFilterButton
          text={'Все'}
          isActive={props.filterMode === TodosFilterTypes.FILTER_ALL}
          clickHandler={handleClickFilterAll}
        />

        <TodoFilterButton
          text={'Завершенные'}
          isActive={props.filterMode === TodosFilterTypes.FILTER_COMPLETED}
          clickHandler={handleClickFilterCompleted}
        />
      </div>
      <div>
        <button
          className="text-xs mr-3 text-blue-500 focus:outline-none hover:underline"
          onClick={handleClickRefresh}
        >
          {REFRESH_LIST}
        </button>
      </div>
    </div>
  );
})
