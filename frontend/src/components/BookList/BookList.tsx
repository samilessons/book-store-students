import { useSelector, useDispatch } from "react-redux";
import { deleteBook, toggleFavorite, selectBooks } from "../../redux/slices/booksSlice";
import { type NewBook } from "../../interfaces/NewBookInterface";
import { selectFilterTitle, selectFilterAuthor, selectOnlyFavoriteFilter } from "../../redux/slices/filterSlice";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import "./BookList.css";
export default function BookList() {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectFilterTitle);
  const authorFilter = useSelector(selectFilterAuthor);
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const dispatch = useDispatch()
  let i = 0;

  const hanldeDeleteBook = (id: string) => dispatch(deleteBook(id));
  const handleToggleFavorite = (id: string) => dispatch(toggleFavorite(id));

  const filteredBooks = books.filter((book: NewBook) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());
    
    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;

    return matchesTitle && matchesAuthor && matchesFavorite;
  });

  const highLightMatch = (text: string, filter: string) => {
    if (!filter) return text;

    const regexp = new RegExp(`(${filter})`, 'gi');
    return text.split(regexp).map((part, i) => {
      if (part.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">{part}</span>
        );
      }
      return part
    });
  }
  
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {filteredBooks.length === 0 ? (
        <p>No books yet.</p>
      ) : (
        <ul>
            {filteredBooks.map(({ author, title, id, isFavorite }: NewBook) => {
              return (
                <li key={id}>
                  <div className="book-info"><span>{++i}</span> {highLightMatch(title, titleFilter)} by <strong>{highLightMatch(author, authorFilter)}</strong> </div>
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
