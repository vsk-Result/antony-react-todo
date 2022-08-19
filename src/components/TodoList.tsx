import React, {FC, useMemo} from 'react';
import {TodoItem} from "./TodoItem";
import {ITodoItem} from "../models/todo-item";

type TodoListProps = {
  todos: ITodoItem[];
  handleClickTodoItem: (id: ITodoItem["id"]) => void;
}

export const TodoList: FC<TodoListProps> = ({todos, handleClickTodoItem}: TodoListProps) => {
  // можно мемоизировать 
  const items = useMemo(() => {

    return todos.map((todo: ITodoItem) => (
      <TodoItem key={todo.id} todo={todo} clickHandler={handleClickTodoItem}/>
    ))
  },[todos, handleClickTodoItem]); 

  return (
    <ul className="m-0 my-4 p-0 list-none w-full">
      {items}
    </ul>
  );
}

