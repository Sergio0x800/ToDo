import React from "react";
import { TodoContext } from "../TodoContext";

const TodoForm = () => {
  const { onSubmit, onChangeForm, openModal } = React.useContext(TodoContext);
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="addTodoText" className="modal__label">
        <span className="modal__text">Ingresa un nuevo ToDo</span>
        <textarea
          name=""
          id="addTodoText"
          cols="30"
          rows="10"
          className="modal__textArea"
          onChange={onChangeForm}
        ></textarea>
        <div className="modal__buttonsContainer">
          <button
            type="button"
            onClick={openModal}
            className="btn__modal --cancel"
          >
            Cancelar
          </button>
          <button type="submit" className="btn__modal --add">
            Ingresar
          </button>
        </div>
      </label>
    </form>
  );
};

export { TodoForm };
