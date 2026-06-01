import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: function (state, action) {
      // return { ...state, title: action.payload } // unmutable
      state.title = action.payload; // mutable
    },
    setResetFilters: () => {
      return { ...initialState };
    }
  }
});

export const { setTitleFilter, setResetFilters } = filterSlice.actions;
export const selectFilterTitle = (state) => state.filter.title;

export default filterSlice.reducer;
