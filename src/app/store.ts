import { configureStore } from "@reduxjs/toolkit";

import rootReducer, { RootState } from "./rootReducer";

const localStorageKey: string = "state";
const persistedState = localStorage.getItem(localStorageKey);
const preloadedState = persistedState ? JSON.parse(persistedState) : {};

const store = configureStore<RootState>({
  reducer: rootReducer,
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem(localStorageKey, JSON.stringify({}));
});

export default store;
