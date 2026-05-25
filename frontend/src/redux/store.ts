import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/reducer";
import filterSliceReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: { 
    books: booksReducer,
    filter: filterSliceReducer
  }
});

export type BookState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;