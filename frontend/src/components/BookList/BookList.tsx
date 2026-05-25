import { useSelector, useDispatch } from "react-redux";
import type { BookState } from "../../redux/store";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators";
import { type NewBook } from "../../interfaces/NewBookInterface";
import { selectFilterTitle } from "../../redux/slices/filterSlice";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import "./BookList.css";
export default function BookList() {
  const books = useSelector((state: BookState) => state.books);
  const titleFilter = useSelector(selectFilterTitle);
  const dispatch = useDispatch()
  let i = 0;

  const hanldeDeleteBook = (id: string) => dispatch(deleteBook(id));
  const handleToggleFavorite = (id: string) => dispatch(toggleFavorite(id));

  const filteredBooks = books.filter(book => {
    return book.title.toLowerCase().includes(titleFilter.toLowerCase());
  })
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books yet.</p>
      ) : (
        <ul>
            {filteredBooks.map(({ author, title, id, isFavorite }: NewBook) => {
              return (
                <li key={id}>
                  <div className="book-info"><span>{++i}</span> {title} by <strong>{author}</strong> </div>
                  <div className="book-actions">
                    <button className="favorite" onClick={() => handleToggleFavorite(id)}>
                      {isFavorite ? <MdFavorite color="magenta"/>:
                      <MdFavoriteBorder/>
                      }
                    </button>
                    <button className="delete" onClick={() => hanldeDeleteBook(id)}>delete</button>
                  </div>
                </li>
              )
            })}
        </ul>
      )}
    </div>
  );
}
