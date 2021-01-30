import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { RootState } from "./rootReducer";
import { Todo } from "../features/types";

export type State = {
  isLoading: boolean;
  todos: Todo[];
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, thunkApi): Promise<Todo[]> => {
    const response = await axios.get(
      "https://xtrix-cvwo-backend.herokuapp.com/api/v1/todos"
    );
    return response.data;
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (
    todo: Pick<Todo, "description" | "dueDate" | "status" | "title">,
    thunkApi
  ): Promise<Todo> => {
    const response = await axios.post(
      "https://xtrix-cvwo-backend.herokuapp.com/api/v1/todos",
      todo
    );
    return response.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (todo: Todo, thunkApi): Promise<Todo> => {
    const response = await axios.put(
      `https://xtrix-cvwo-backend.herokuapp.com/api/v1/todos/${todo.id}`,
      todo
    );
    return response.data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todo: Todo, thunkApi): Promise<Todo> => {
    await axios.delete(
      `https://xtrix-cvwo-backend.herokuapp.com/api/v1/todos/${todo.id}`
    );
    return todo;
  }
);

const initialState: State = {
  isLoading: false,
  todos: [],
};

const todosSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state: State, { payload }) => {
      state.isLoading = false;
      state.todos = payload;
    });
    builder.addCase(fetchTodos.rejected, (state: State) => {
      state.isLoading = false;
      state.todos = [];
    });
    builder.addCase(fetchTodos.pending, (state: State) => {
      state.isLoading = true;
    });
    builder.addCase(addTodo.fulfilled, (state: State, { payload }) => {
      state.isLoading = false;
      state.todos = [...state.todos, payload].sort(
        (todo1, todo2) => todo1.dueDate - todo2.dueDate
      );
    });
    builder.addCase(updateTodo.fulfilled, (state: State, { payload }) => {
      state.isLoading = false;
      state.todos = [
        ...state.todos.filter((todo) => todo.id !== payload.id),
        payload,
      ].sort((todo1, todo2) => todo1.dueDate - todo2.dueDate);
    });
    builder.addCase(deleteTodo.fulfilled, (state: State, { payload }) => {
      state.isLoading = false;
      state.todos = [
        ...state.todos.filter((todo) => todo.id !== payload.id),
      ].sort((todo1, todo2) => todo1.dueDate - todo2.dueDate);
    });
  },
});

export const todosSelector = (state: RootState) => state.todos;

export default todosSlice.reducer;
