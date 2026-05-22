import * as actionType from "./actionType";
import { type NewBook } from "../../interfaces/NewBookInterface";

type BookAction =
  | { type: typeof actionType.ADD_BOOK; payload: NewBook }
  | { type: typeof actionType.DELETE_BOOK; payload: string }
  | { type: typeof actionType.TOGGLE_FAVORITE; payload: string };

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
    "isFavorite": true
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
  }];

const booksReducer = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return [...state, action.payload];
    case actionType.DELETE_BOOK:
      return state.filter(book => book.id !== action.payload);
    case actionType.TOGGLE_FAVORITE:
      return state.map(book => {
        if (book.id === action.payload) {
          return {...book, isFavorite: !book.isFavorite}
        }
        return book;
      })
    default:
      return state;
  }
};

export default booksReducer;
