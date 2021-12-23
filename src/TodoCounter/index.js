import React from "react";
import { TodoContext } from "../TodoContext";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <div className="todoCounter">
      <h1 className="todoCounter__title">Welcome</h1>
      <p className="todoCounter__info">
        Has completado {completedTodos} de {totalTodos} ToDo
      </p>
    </div>
  );
};

export { TodoCounter };
