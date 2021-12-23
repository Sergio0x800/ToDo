import React from "react";
import { TodoContext } from "../TodoContext";

const TodoItem = ({ text, status }) => {
  const { onComplete, onDelete } = React.useContext(TodoContext);
  return (
    <div className="todoItem">
      <span
        className="todoItem__iconCheck"
        onClick={() => onComplete(text)}
      ></span>
      <p className={`todoItem__text ${status && "--itemCompleted"}`}>{text}</p>
      <span
        className="todoItem__iconDelete"
        onClick={() => onDelete(text)}
      ></span>
    </div>
  );
};

export { TodoItem };
