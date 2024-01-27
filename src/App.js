import React from "react";
import { useState } from "react";
import bookimage from "./02s1_7nkn_210729.jpg";

const booksArray = [
  {
    title: "Mathematics",
    author: "R D Sharma",
    description: "This is my maths book",
    publication: "Pearson",
    year: "2020",
    img: bookimage,
  },
  {
    title: "English",
    author: "Wren & Martin",
    description: "This is my English book",
    publication: "Pearson",
    year: "2020",
    img: bookimage,
  },
  {
    title: "History",
    author: "R D Sharma",
    description: "This is my maths book",
    publication: "Pearson",
    year: "2020",
    img: bookimage,
  },
];

export default function App() {
  const [showBook, setShowBook] = useState(booksArray[0]);
  const [showAddBook, setShowAddBook] = useState(false);
  function handleAddButton() {
    setShowAddBook(true);
  }
  function handleShowBook(id) {
    setShowBook(booksArray[id]);
  }
  return (
    <div className="app">
      <Header />
      {showAddBook && <AddBookForm />}
      {booksArray.length > 0 ? (
        <BookList
          handleShowBook={handleShowBook}
          showBook={showBook}
          handleAddButton={handleAddButton}
        />
      ) : (
        <LandingPage handleAddButton={handleAddButton} />
      )}
      <Footer />
    </div>
  );
}
function LandingPage({ handleAddButton }) {
  return (
    <div className="landing-page">
      <h1>Welcome to your Book Library</h1>
      <p>
        You don't have any books added to the library. Start adding the books
        now!
      </p>
      <AddBook handleAddButton={handleAddButton} />
    </div>
  );
}
function Header() {
  return (
    <div className="header">
      <header>My Book Library</header>
    </div>
  );
}

function BookList({ handleShowBook, showBook, handleAddButton }) {
  return (
    <div className="book-list">
      <div className="book-list-left">
        <SearchBar />
        <div className="book-list-left-all">
          {booksArray.map((book, index) => (
            <Book
              id={index}
              title={book.title}
              author={book.author}
              image={bookimage}
              handleShowBook={handleShowBook}
            />
          ))}
          <SortComponent handleAddButton={handleAddButton} />
        </div>
      </div>
      <BookDetail showBook={showBook} />
    </div>
  );
}

function SortComponent({ handleAddButton }) {
  return (
    <div className="book-sort">
      <label>Sort By: </label>
      <select>
        <option>Title</option>
        <option>Author</option>
      </select>
      <AddBook handleAddButton={handleAddButton} />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search.." />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

function BookDetail({ showBook }) {
  return (
    <div className="book-list-right">
      <div className="book-detail">
        <div className="book-detail-image">
          <img
            src={showBook.img}
            alt={showBook.title}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="book-detail-info">
          <p>Description:{showBook.description} </p>
          <h5>Title: {showBook.title}</h5>
          <h5>Author: {showBook.author}</h5>
          <h5>Publication: {showBook.publication}</h5>
          <h5>Year: {showBook.year}</h5>
        </div>
        <div className="book-detail-actions">
          <div>
            <button>
              <i className="fas fa-pencil-alt"></i>
            </button>
            <button>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Book({ id, title, author, image, handleShowBook }) {
  return (
    <div className="Book" onClick={() => handleShowBook(id)}>
      <div className="book-image">
        <img
          src={image}
          alt="img"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="book-info">
        <h5>{title}</h5>
        <h6>{author}</h6>
      </div>
    </div>
  );
}

function AddBook({ handleAddButton }) {
  return (
    <div className="add-book">
      <button onClick={() => handleAddButton()}>Add Book</button>
    </div>
  );
}

function AddBookForm() {
  return (
    <div className="add-book-main">
      <form className="add-book-form">
        <label>Title</label>
        <input type="text"></input>
        <label>Author</label>
        <input type="text"></input>
        <label>Publication</label>
        <input type="text"></input>
        <label>Year</label>
        <input type="text"></input>
        <label>Description</label>
        <textarea type="text"></textarea>
        <label>Upload Image</label>
        <input type="file" name="img"></input>
        <div className="add-book-form-buttons">
          <button>Add</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      Crafted with ❤️ by Tufail Dar
    </footer>
  );
}
