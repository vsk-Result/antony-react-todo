import React, {FC} from 'react';
import {ITodoItem} from "../models/todo-item";

interface TodoItemProps {
  todo: ITodoItem,
  clickHandler: any
}

export const TodoItem: FC<TodoItemProps> = ({ todo , clickHandler}: TodoItemProps) => {

  const classes = ['todo-item'];

  if (todo.completed) {
    classes.push('completed');
  }

  return (
    <li
      className={classes.join(' ')}
      onClick={() => clickHandler(todo.id)}
    >
      <img src={todo.imageUrl} alt={todo.title} />
      {todo.title}
    </li>
  )
}
