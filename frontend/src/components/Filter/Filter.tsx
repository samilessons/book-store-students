import { useDispatch, useSelector, } from "react-redux";
import {
  setTitleFilter, setAuthorFilter, setOnlyFavoriteFilter, setResetFilters,
  selectFilterTitle, selectFilterAuthor, selectOnlyFavoriteFilter
} from "../../redux/slices/filterSlice";

import "./Filter.css"

export default function Filter() {
  const dispatch = useDispatch();
  const titleValue = useSelector(selectFilterTitle);
  const AuthorValue = useSelector(selectFilterAuthor);
  const onlyFavoriteValue = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setTitleFilter(e.target.value))
  const handleAuthorFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setAuthorFilter(e.target.value))
  const handleOnlyFavoriteChange = () => dispatch(setOnlyFavoriteFilter())

  const handleResetFilters = () => dispatch(setResetFilters());

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by Title"
            onChange={handleTitleFilterChange}
            value={titleValue}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by Author"
            onChange={handleAuthorFilterChange}
            value={AuthorValue}
          />
        </div>
        <div className="filter-group">
          <label>
            <input type="checkbox" checked={onlyFavoriteValue} onChange={handleOnlyFavoriteChange} />
            <span>Only Favorite</span>
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
}