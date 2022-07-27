import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";

const Books = () => {
  const bookList = useSelector((state) => state.books.value);
  return (
    <div className="books">
      {bookList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};
export default Books;
