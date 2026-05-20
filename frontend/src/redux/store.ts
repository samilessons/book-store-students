import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reducer";

const store = configureStore({
  reducer: { 
    books: booksReducer
  }
});

export type BookState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;