import { FaTimes } from "react-icons/fa";
const Book = ({ book }) => {
  return (
    <div className="Book">
      <h3>
        Name: {book.name}{" "}
        <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </h3>
      <p>$ {book.price}</p>
      <p>Category: {book.category}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};
export default Book;
