import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos, removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos);
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos(selectedUser?.id));
  }, [dispatch, selectedUser]);

  console.log("todos", todos);
  return (
    <div>
      <h1>
        {selectedUser
          ? `Hey ${selectedUser.name}! Here are your todos!`
          : `You have no todos, please check if you have logged in.`}
      </h1>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.title}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
