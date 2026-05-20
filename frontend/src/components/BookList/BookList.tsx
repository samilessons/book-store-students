import { useSelector } from "react-redux";
import type { BookState } from "../../redux/store";
import type { NewBook } from "../../redux/books/actionCreators";

import "./BookList.css";

export default function BookList() {
  const books = useSelector((state: BookState) => state.books);

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books yet.</p>
      ) : (
        <ul>
          {books.map((book: NewBook, index: number) => (
            <li key={index}>
              <div className="book-info"> {book.title} by <strong>{book.author}</strong> </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
