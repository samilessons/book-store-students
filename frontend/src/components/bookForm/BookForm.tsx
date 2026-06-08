import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import CreateBook from "../../utils/createBook";
import { addBook, fetchBook, selectIsLoadingViaApi } from "../../redux/slices/booksSlice";
import data from "../../../../data/data.json";
import { FaSpinner } from "react-icons/fa";
import { setError } from "../../redux/slices/errorSlice";

import "./BookForm.css";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const isLoadingViaAPI = useSelector(selectIsLoadingViaApi)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(CreateBook({ title, author }, "MANUAL")));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("You must fill book's title and author"))
    }
  };

  const handleAddRandomBook = () => {
    const rndid = Math.floor(Math.random() * data.length);
    if (data[rndid]) {
      dispatch(addBook(CreateBook({ title: data[rndid].title, author: data[rndid].author }, "RANDOM")));
    }
  };

  const handleAddRandomBookViaAPI = async () => {
    try {
      await dispatch(fetchBook("http://localhost:5555/api-book-with-delay"))
    } catch (error) {
      console.log(error);
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

        <button
          type="button"
          disabled={isLoadingViaAPI}
          onClick={handleAddRandomBookViaAPI}>
          {isLoadingViaAPI ? <span className="loading__wrapper"><FaSpinner className="spinner" /> Loading...</span> : "Get From API"}
        </button>
      </form>
    </div>
  );
}
