import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./books/reducer";
import booksSliceReducer from "./slices/booksSlice";
import filterSliceReducer from "./slices/filterSlice";

const store = configureStore({
  reducer: { 
    books: booksSliceReducer,
    filter: filterSliceReducer
  }
});

export type BookState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;