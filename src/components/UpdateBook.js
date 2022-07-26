import React from "react";
import { useState } from "react";
import { updateBook } from "../features/books";
import { useDispatch } from "react-redux";
const UpdateBook = ({ book, closeUpdateForm }) => {
  const [name, setName] = useState(book.name);
  const [price, setPrice] = useState(book.price);
  const [category, setCategory] = useState(book.category);
  const [description, setDescription] = useState(book.description);
  const dispatch = useDispatch();
  const close = false;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || price < 1 || !category || !description) {
      alert("Please properly fill all information");
      return;
    }
    dispatch(
      updateBook({
        id: book.id,
        name,
        price,
        category,
        description,
      })
    );
    closeUpdateForm();
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Book Name</label>
        <input
          type="text"
          defaultValue={book.name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Price $</label>
        <input
          type="number"
          defaultValue={book.price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Category</label>
        <input
          type="text"
          defaultValue={book.category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          defaultValue={book.description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <input type="submit" className="btn" value="Update Book" />
    </form>
  );
};
export default UpdateBook;
