import React, {FC, memo} from 'react';
import {ITodoItem} from "../models/todo-item";

type TodoItemProps = {
  todo: ITodoItem;
  clickHandler: (id: ITodoItem["id"]) => void;
}

export const TodoItem: FC<TodoItemProps> = memo(({ todo , clickHandler}: TodoItemProps) => {

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
});
