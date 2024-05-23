// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../reducer";
import { themReducer } from "../ThemReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    theme: themReducer,
  },
});

export default store;
