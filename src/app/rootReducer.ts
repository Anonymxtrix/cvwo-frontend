import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth";
import todosReducer from "./todos";

const rootReducer = combineReducers({
  auth: authReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
