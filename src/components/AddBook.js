import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../features/books";
const AddBook = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.books.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || price < 1 || !category || !description) {
      alert("Please properly fill all information");
      return;
    }
    dispatch(
      addBook({
        id: bookList[bookList.length - 1].id + 1,
        name,
        price,
        category,
        description,
      })
    );
    setName("");
    setPrice(0);
    setCategory("");
    setDescription("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Book Name</label>
        <input
          type="text"
          placeholder="book name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Price $</label>
        <input
          type="number"
          placeholder="book price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Category</label>
        <input
          type="text"
          placeholder="book category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label>Description</label>
        <input
          type="text"
          placeholder="book description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <input type="submit" className="btn" value="Add New Book" />
    </form>
  );
};
export default AddBook;
