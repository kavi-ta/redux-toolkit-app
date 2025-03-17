import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { UsersDropdown } from "./components/UsersDropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My Todo App</h1>
      <UsersDropdown />

      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
