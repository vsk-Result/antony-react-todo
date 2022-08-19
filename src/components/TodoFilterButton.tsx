import React, { memo } from 'react';
import {FC} from "react";

interface TodoFilterButtonProps {
  text: string,
  isActive: boolean,
  clickHandler: VoidFunction,
}

export const TodoFilterButton: FC<TodoFilterButtonProps> = memo(({ text, isActive, clickHandler }: TodoFilterButtonProps) => {
  const classes = ['text-xs mr-3 font-bold hover:underline text-gray-500 focus:outline-none'];

  if (isActive) {
    classes.push('text-green-500');
  }

  return (
    <button
      className={classes.join(' ')}
      // здесь нет необходимости определять еще одну функцию, чтобы в ней вызывать clickHandler
      onClick={clickHandler}
    >
      {text}
    </button>
  );
});
