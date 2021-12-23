import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodo = localStorage.getItem(itemName);
        let parseItem;

        if (!localStorageTodo) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = initialValue;
        } else {
          parseItem = JSON.parse(localStorageTodo);
        }
        setItem(parseItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 3000);
  }, []);

  const saveTodos = (newTodos) => {
    setItem(newTodos);
    localStorage.setItem(itemName, JSON.stringify(newTodos));
  };
  return {
    item,
    saveTodos,
    error,
    loading,
  };
};

export { useLocalStorage };

// const obj = [
//   {
//     text: "Sacar la basura",
//     status: false,
//   },
//   {
//     text: "Ir de compras",
//     status: false,
//   },
//   {
//     text: "Repara la computadora",
//     status: false,
//   },
//   {
//     text: "Cenar con la abuela",
//     status: false,
//   },
//   {
//     text: "Hacer la tarea",
//     status: false,
//   },
//   {
//     text: "Preparar la cena",
//     status: false,
//   },
//   {
//     text: "Pintar la casa",
//     status: false,
//   },
//   {
//     text: "Colocar el arbol de navidad",
//     status: false,
//   },
// ];
