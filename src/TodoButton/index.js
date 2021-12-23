import React from "react";
import { TodoContext } from "../TodoContext";

const TodoButton = () => {
  const { openModal } = React.useContext(TodoContext);
  return (
    <button className="todoButton" onClick={openModal}>
      <span className="todoButton__textAdd">+</span>
    </button>
  );
};

export { TodoButton };
