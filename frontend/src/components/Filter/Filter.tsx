import { useDispatch, useSelector, } from "react-redux";
import { setTitleFilter, setResetFilters, selectFilterTitle } from "../../redux/slices/filterSlice";

import "./Filter.css"

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilterTitle);

  const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => dispatch(setTitleFilter(e.target.value))
  const handleResetFilters = () => dispatch(setResetFilters());

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by title"
            onChange={handleTitleFilterChange}
            value={value}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
}