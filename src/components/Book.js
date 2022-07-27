import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../features/books";
import UpdateBook from "./UpdateBook";
const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const closeUpdateForm = () => {
    setShowUpdateForm(false);
  };
  return (
    <>
      <div className="Book">
        <h3
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShowUpdateForm(!showUpdateForm);
          }}
        >
          {book.name}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => {
              dispatch(deleteBook({ id: book.id }));
            }}
          />
        </h3>
        <p>$ {book.price}</p>
        <p>{book.category}</p>
        <p>{book.description}</p>
      </div>
      {showUpdateForm && (
        <UpdateBook book={book} closeUpdateForm={closeUpdateForm} />
      )}
    </>
  );
};
export default Book;
