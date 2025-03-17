import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { UsersDropdown } from "./components/UsersDropdown";
import { Greetings } from "./components/Greetings";
import { Counter } from "./components/Counter";
import { User } from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My Todo App</h1>
      <Greetings />
      <Counter />
      <User userId={4} />
      {/* <UsersDropdown />

      <AddTodo />
      <Todos /> */}
    </>
  );
}

export default App;
