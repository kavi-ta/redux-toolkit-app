import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  selectedUser: null,
  status: "idle",
  error: null,
};

const API = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const res = await axios.get(API);
  const data = await res.data;
  console.log(data);
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = state.users.filter(
        (user) => user.id == action.payload
      )[0];
    },
    logout: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "successful";
      state.users = action.payload;
      console.log("users", state.users);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { selectUser, logout } = userSlice.actions;

export default userSlice.reducer;
