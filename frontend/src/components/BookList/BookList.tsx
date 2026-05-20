import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { NewBook } from "../../redux/books/actionCreators";

export default function BookList() {
  const books = useSelector((state: RootState) => state.books);

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books yet.</p>
      ) : (
        <ul>
          {books.map((book: NewBook, index: number) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
