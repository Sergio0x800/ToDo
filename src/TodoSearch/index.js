import React from "react";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { changeInput } = React.useContext(TodoContext);
  return (
    <div className="todoSearch">
      <input type="text" className="todoSearch__input" onChange={changeInput} />
    </div>
  );
};

export { TodoSearch };
