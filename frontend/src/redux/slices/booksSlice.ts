import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CreateBook from "../../utils/createBook";
import { setError } from "./errorSlice";


const initialState = {
  books: [],
  isLoadingViaAPI: false
};

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url: string, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      // return [...state, action.payload]; // immutable
      state.books.push(action.payload); // mutable
    },
    deleteBook: (state, action) => {
      // return state.filter(book => book.id !== action.payload); // immutable
      const index = state.books.findIndex((book) => book.id === action.payload); // mutbale
      if (index !== -1) {
        state.books.splice(index, 1);
      }
    },
    toggleFavorite: (state, action) => {
      // immutbale
      // return state.map(book => {
      //   if (book.id === action.payload) {
      //     return { ...book, isFavorite: !book.isFavorite }
      //   }
      //   return book;
      // })

      // mutabble
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state, action) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      if (action.payload.title && action.payload.author) {
        state.books.push(CreateBook(action.payload, "VIA API"));
      }
    });
    builder.addCase(fetchBook.rejected, (state, action) => {
      state.isLoadingViaAPI = false;
      console.log(action.error.message);
    });
  }
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingViaApi = (state) => state.books.isLoadingViaAPI;

export default booksSlice.reducer;