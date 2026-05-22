import * as actionType from "./actionType";

import {type NewBook } from "../../interfaces/NewBookInterface";

export const addBook = (newBook: NewBook) => { 
  return {
    type: actionType.ADD_BOOK,
    payload: newBook
  };
};

export const deleteBook = (id: string) => {
  console.log(`${id} from deletebook`);
  return {
    type: actionType.DELETE_BOOK,
    payload: id
  };
};