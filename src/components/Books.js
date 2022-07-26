import React from "react";
import { BooksData } from "../FakeData";
import { useSelector } from "react-redux";
import Book from "./Book";

const Books = () => {
  const bookList = useSelector((state) => state.books.value);
  return (
    <>
      {bookList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </>
  );
};
export default Books;
