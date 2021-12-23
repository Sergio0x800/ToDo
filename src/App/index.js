import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvide } from "../TodoContext";

function App() {
  return (
    <TodoProvide>
      <AppUI />
    </TodoProvide>
  );
}

export default App;
