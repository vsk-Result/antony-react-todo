import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos, filterTodos } from "../store/todos/actions";
import { TodosFilterTypes } from "../store/todos/types";

type UseClickFilterHandlers = {
    handleClickFilterAll: VoidFunction;
    handleClickFilterCompleted: VoidFunction;
    handleClickRefresh: VoidFunction;
}

export const useClickFilterHandlers = (): UseClickFilterHandlers => {
    const dispatch = useDispatch();

    const handleClickFilterAll =  useCallback(() => {
        dispatch(filterTodos(TodosFilterTypes.FILTER_ALL));
      },[dispatch]);
    
    const handleClickFilterCompleted = useCallback(() => {
        dispatch(filterTodos(TodosFilterTypes.FILTER_COMPLETED));
    },[dispatch]);

    const handleClickRefresh = useCallback(() => {
        dispatch(fetchTodos());
        dispatch(filterTodos(TodosFilterTypes.FILTER_ALL));
      },[dispatch]);
    
    return {handleClickFilterAll, handleClickFilterCompleted, handleClickRefresh};

}