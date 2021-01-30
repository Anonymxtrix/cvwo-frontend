import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "./rootReducer";

export type State = {
  isLoading: boolean;
  user: null | User;
};

export type User = {
  id: string;
  name: string;
};

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (userId: string, thunkApi): Promise<User> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return {
      id: "kjansdlijfnalkjsdnfas",
      name: "Bryan",
    };
  }
);

const initialState: State = { isLoading: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: State, action: PayloadAction<User>) {
      state.isLoading = false;
      state.user = action.payload;
    },
    logout(state: State) {
      state.isLoading = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state: State, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    });
    builder.addCase(fetchUser.rejected, (state: State) => {
      state.isLoading = false;
      state.user = null;
    });
  },
});

export const authSelector = (state: RootState) => state.auth;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
