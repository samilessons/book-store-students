import * as actionType from "./actionType";
import { type NewBook } from "../../interfaces/NewBookInterface";

type BookAction =
  | { type: typeof actionType.ADD_BOOK; payload: NewBook }
  | { type: typeof actionType.DELETE_BOOK; payload: string };

const initialState: NewBook[] = [
  ];

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
