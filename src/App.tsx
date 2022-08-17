import React, {FC} from 'react';
import {TodoContainer} from "./components/TodoContainer";

export const App: FC = () => {
  return (
    <main className="m-auto max-w-md w-full overflow-hidden">
      <h1 className="uppercase text-2xl block font-bold py-6 text-gray-700 tracking-widest text-center">
        Todo для великого Тони Махони от Влада Кадони
      </h1>

      <TodoContainer />
    </main>
  );
}
