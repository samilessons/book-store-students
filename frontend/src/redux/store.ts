import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./books/reducer";
import booksSliceReducer from "./slices/booksSlice";
import filterSliceReducer from "./slices/filterSlice";
import errorSliceReducer from "./slices/errorSlice";

const store = configureStore({
  reducer: { 
    books: booksSliceReducer,
    filter: filterSliceReducer,
    error: errorSliceReducer
  }
});

export type BookState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;