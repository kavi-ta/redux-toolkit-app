import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "../user/userSlice";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

const API = "https://jsonplaceholder.typicode.com/";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (userId) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/?userId=${userId}`
    );

    const data = await res.data;
    return data;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = "loading";
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = "successful";
      state.todos = state.todos.concat(action.payload);
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isLoading = "failed";
      state.error = action.error.message;
    });

    builder.addCase(logout, (state) => {
      state.todos = [];
    });
  },
});

// individual

// export individual reducers
export const { addTodo, removeTodo } = todoSlice.actions;
// return entire reducer to register in store
export default todoSlice.reducer;
