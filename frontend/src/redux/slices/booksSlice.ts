import { createSlice } from "@reduxjs/toolkit";

import { type NewBook } from "../../interfaces/NewBookInterface";

const initialState: NewBook[] = [
  {
    "id": "1",
    "title": "Atomic Habits",
    "author": "James Clear",
    "isFavorite": false
  },
  {
    "id": "2",
    "title": "Deep Work",
    "author": "Cal Newport",
    "isFavorite": false
  },
  {
    "id": "3",
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "isFavorite": false
  },
  {
    "id": "4",
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "isFavorite": false
  },
  {
    "id": "5",
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey",
    "isFavorite": false
  },
  {
    "id": "6",
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "isFavorite": false
  },
  {
    "id": "7",
    "title": "The Lean Startup",
    "author": "Eric Ries",
    "isFavorite": false
  },
  {
    "id": "8",
    "title": "Start With Why",
    "author": "Simon Sinek",
    "isFavorite": false
  },
  {
    "id": "9",
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "isFavorite": false
  },
  {
    "id": "10",
    "title": "0Man's Search for Meaning",
    "author": "Viktor E. Frankl",
    "isFavorite": false
  }
];

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
  }
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;