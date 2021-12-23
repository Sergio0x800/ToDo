import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvide = ({ children }) => {
  const {
    item: todos,
    saveTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", []);
  const [textInput, setTextInput] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const [textArea, setTextArea] = React.useState("");

  const completedTodos = todos.filter((item) => !!item.status).length;
  const totalTodos = todos.length;

  const onComplete = (text) => {
    let findTodo = todos.findIndex((item) => item.text === text);
    let newTodo = [...todos];
    newTodo[findTodo].status = true;
    saveTodos(newTodo);
  };
  const onDelete = (text) => {
    let findTodo = todos.findIndex((item) => item.text === text);
    let newTodo = [...todos];
    newTodo.splice(findTodo, 1);
    saveTodos(newTodo);
  };
  const openModal = () => {
    setModal((prevState) => !prevState);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(textArea);
  };
  const onChangeForm = (event) => {
    setTextArea(event.target.value);
  };
  const addTodo = (textArea) => {
    let newTodos = [...todos];
    if (!textArea.length >= 1) {
      alert("Por favor ingrese algun ToDo...");
    } else {
      newTodos.unshift({ text: textArea, status: false });
      openModal();
      saveTodos(newTodos);
    }
  };
  const changeInput = (event) => {
    setTextInput(event.target.value);
  };
  let searchedTodos;
  if (!textInput >= 1) {
    searchedTodos = [...todos];
  } else {
    searchedTodos = todos.filter((item) => {
      const todoText = item.text.toLowerCase();
      const infoInput = textInput.toLowerCase();
      return todoText.includes(infoInput);
    });
  }
  return (
    <TodoContext.Provider
      value={{
        searchedTodos,
        saveTodos,
        completedTodos,
        totalTodos,
        onComplete,
        onDelete,
        changeInput,
        error,
        loading,
        modal,
        openModal,
        onSubmit,
        onChangeForm,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvide };
