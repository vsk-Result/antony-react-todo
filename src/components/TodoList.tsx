import React, {FC} from 'react';
import {TodoItem} from "./TodoItem";
import {ITodoItem} from "../models/todo-item";

interface TodoListProps {
  todos: ITodoItem[],
  handleClickTodoItem: any
}

export const TodoList: FC<TodoListProps> = ({todos, handleClickTodoItem}: TodoListProps) => {

  const items = todos.map((todo: ITodoItem) => (
    <TodoItem key={todo.id} todo={todo} clickHandler={handleClickTodoItem}/>
  ))

  return (
    <ul className="m-0 my-4 p-0 list-none w-full">
      {items}
    </ul>
  );
}
