import * as actionType from "./actionType";
import { type NewBook } from "../../interfaces/NewBookInterface";

type BookAction =
  | { type: typeof actionType.ADD_BOOK; payload: NewBook }
  | { type: typeof actionType.DELETE_BOOK; payload: string };

const initialState: NewBook[] = [
  {
    "id": "1",
    "title": "Atomic Habits",
    "author": "James Clear"
  },
  {
    "id": "2",
    "title": "Deep Work",
    "author": "Cal Newport"
  },
  {
    "id": "3",
    "title": "The Psychology of Money",
    "author": "Morgan Housel"
  },
  {
    "id": "4",
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill"
  },
  {
    "id": "5",
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey"
  },
  {
    "id": "6",
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki"
  },
  {
    "id": "7",
    "title": "The Lean Startup",
    "author": "Eric Ries"
  },
  {
    "id": "8",
    "title": "Start With Why",
    "author": "Simon Sinek"
  },
  {
    "id": "9",
    "title": "The Alchemist",
    "author": "Paulo Coelho"
  },
  {
    "id": "10",
    "title": "0Man's Search for Meaning",
    "author": "Viktor E. Frankl"
  }];

const booksReducer = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return [...state, action.payload];
    case actionType.DELETE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
