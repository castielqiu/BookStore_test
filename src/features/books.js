import { createSlice } from "@reduxjs/toolkit";
import { BooksData } from "../FakeData";
export const bookSlice = createSlice({
  name: "books",
  initialState: { value: BooksData },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id);
    },
    updateBook: (state, action) => {
      state.value.map((book) => {
        if (book.id === action.payload.id) {
          book.name = action.payload.name;
          book.price = action.payload.price;
          book.category = action.payload.category;
          book.description = action.payload.description;
        }
      });
    },
  },
});
export default bookSlice.reducer;
export const { addBook, deleteBook, updateBook } = bookSlice.actions;
