import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: function (state, action) {
      // return { ...state, title: action.payload } // unmutable
      state.title = action.payload; // mutable
    },
    setAuthorFilter: function (state, action) {
      state.author = action.payload; // mutable
    },
    setResetFilters: () => {
      return { ...initialState };
    }
  }
});

export const { setTitleFilter, setAuthorFilter, setResetFilters } = filterSlice.actions;

export const selectFilterTitle = (state) => state.filter.title;
export const selectFilterAuthor = (state) => state.filter.author;

export default filterSlice.reducer;
