import * as actionType from "./actionType";
import type { NewBook } from "./actionCreators";

interface BookAction {
  type: string;
  payload?: NewBook;
}

const initialState: NewBook[] = [];

const booksReducer = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return action.payload ? [...state, action.payload] : state;
    default:
      return state;
  }
};

export default booksReducer;
