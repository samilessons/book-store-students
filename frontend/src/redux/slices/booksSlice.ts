import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import CreateBook from "../../utils/createBook";
import { type NewBook } from "../../interfaces/NewBookInterface";
import { setError } from "./errorSlice";

const initialState: NewBook[] = [
  // {
  //   "id": "1",
  //   "title": "Atomic Habits",
  //   "author": "James Clear",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "2",
  //   "title": "Deep Work",
  //   "author": "Cal Newport",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "3",
  //   "title": "The Psychology of Money",
  //   "author": "Morgan Housel",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "4",
  //   "title": "Think and Grow Rich",
  //   "author": "Napoleon Hill",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "5",
  //   "title": "The 7 Habits of Highly Effective People",
  //   "author": "Stephen R. Covey",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "6",
  //   "title": "Rich Dad Poor Dad",
  //   "author": "Robert T. Kiyosaki",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "7",
  //   "title": "The Lean Startup",
  //   "author": "Eric Ries",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "8",
  //   "title": "Start With Why",
  //   "author": "Simon Sinek",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "9",
  //   "title": "The Alchemist",
  //   "author": "Paulo Coelho",
  //   "isFavorite": false,
  //   "source": "default"
  // },
  // {
  //   "id": "10",
  //   "title": "0Man's Search for Meaning",
  //   "author": "Viktor E. Frankl",
  //   "isFavorite": false,
  //   "source": "default"
  // }
];

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
      state.push(action.payload); // mutable
    },
    deleteBook: (state, action) => {
      // return state.filter(book => book.id !== action.payload); // immutable
      const index = state.findIndex((book) => book.id === action.payload); // mutbale
      if (index !== -1) {
        state.splice(index, 1);
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
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(CreateBook(action.payload, "VIA API"));
      }
    });
    builder.addCase(fetchBook.rejected, (_, action) => {
      console.log(action.error.message);
    });
  }
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;