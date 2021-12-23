import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoButton } from "../TodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

const AppUI = () => {
  const { searchedTodos, loading, error, modal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      {error && (
        <div className="status">
          <p className="status__Text">ha ocurrido un error</p>
        </div>
      )}
      {loading && (
        <div className="status">
          <p className="status__Text">Cargando tus ToDo...</p>
        </div>
      )}

      {!error && !searchedTodos.length >= 1 && !loading && (
        <div className="status">
          <p className="status__Text">Agrega un nuevo ToDo para comenzar</p>
        </div>
      )}
      <TodoList>
        {searchedTodos.map((item) => (
          <TodoItem key={item.text} text={item.text} status={item.status} />
        ))}
      </TodoList>
      {modal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <TodoButton />
    </React.Fragment>
  );
};

export { AppUI };
