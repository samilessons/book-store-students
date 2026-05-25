import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import CreateBook from "../../utils/createBook";
import { addBook } from "../../redux/books/actionCreators";
import data from "../../data/data.json"
import "./BookForm.css";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(CreateBook({ title, author })));
      setTitle("");
      setAuthor("");
    }
  };

  const handleAddRandomBook = () => {
    const rndid = Math.floor(Math.random() * data.length);
    if (data[rndid]) {
      dispatch(addBook(CreateBook({ title: data[rndid].title, author: data[rndid].author })));
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>Add Random</button>
      </form>
    </div>
  );
}
