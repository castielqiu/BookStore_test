import { createSlice } from "@reduxjs/toolkit";
import { BooksData } from "../FakeData";
export const bookSlice = createSlice({
  name: "books",
  initialState: { value: BooksData },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export default bookSlice.reducer;
export const { addBook } = bookSlice.actions;
