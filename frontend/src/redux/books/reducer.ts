import * as actionType from "./actionType";
import type { NewBook } from "./actionCreators";

interface BookAction {
  type: string;
  payload?: NewBook;
}

const initialState: NewBook[] = [{
  "title": "Atomic Habits",
  "author": "James Clear"
},
  {
    "title": "Deep Work",
    "author": "Cal Newport"
  },
  {
    "title": "The Psychology of Money",
    "author": "Morgan Housel"
  },
  {
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill"
  },
  {
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey"
  },
  {
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki"
  },
  {
    "title": "The Lean Startup",
    "author": "Eric Ries"
  },
  {
    "title": "Start With Why",
    "author": "Simon Sinek"
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho"
  },
  {
    "title": "Man's Search for Meaning",
    "author": "Viktor E. Frankl"
  }];

const booksReducer = (state = initialState, action: BookAction) => {
  switch (action.type) {
    case actionType.ADD_BOOK:
      return action.payload ? [...state, action.payload] : state;
    default:
      return state;
  }
};

export default booksReducer;
