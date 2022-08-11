import React from 'react';
import {FC} from "react";

interface TodoFilterButtonProps {
  text: string,
  isActive: boolean,
  clickHandler: any,
}

export const TodoFilterButton: FC<TodoFilterButtonProps> = ({ text, isActive, clickHandler }: TodoFilterButtonProps) => {
  const classes = ['text-xs mr-3 font-bold hover:underline text-gray-500 focus:outline-none'];

  if (isActive) {
    classes.push('text-green-500');
  }

  return (
    <button
      className={classes.join(' ')}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
}
