import Header from "./components/Header";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const bookList = useSelector((state) => state.books.value);
  const [showAddBook, setShowAddBook] = useState(false);
  return (
    <div className="Container">
      <Header
        onAdd={() => setShowAddBook(!showAddBook)}
        showAdd={showAddBook}
      />
      {showAddBook && <AddBook />}
      {bookList.length > 0 ? <Books /> : "No Books in the Store"}
    </div>
  );
}

export default App;
