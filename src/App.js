import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Header />

      <BookList />
      <Footer />
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

function BookList() {
  return (
    <div className="book-list">
      <div className="book-list-left">
        <div className="search-bar">
          <input type="text" placeholder="Search.." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="book-list-left-all">
          <Book />
          <Book />
          <Book />
        </div>
        <div className="book-sort">
          <label>Sort By: </label>
          <select>
            <option>Title</option>
            <option>Author</option>
          </select>
          <AddBook />
        </div>
      </div>

      <div className="book-list-right">
        <BookDetail />
      </div>
    </div>
  );
}

function BookDetail() {
  return (
    <div className="book-detail">
      <div className="book-detail-image"></div>
      <div className="book-detail-info">
        <p>Description: </p>
        <h5>Title: Mathematics</h5>
        <h5>Author: William Shakespeare</h5>
        <h5>Publication: Pearson</h5>
        <h5>Year: 2010</h5>
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
  );
}

function Book() {
  return (
    <div className="Book">
      <div className="book-image"></div>
      <div className="book-info">
        <h5>Title</h5>
        <h6>Author</h6>
      </div>
    </div>
  );
}

function AddBook() {
  return (
    <div className="add-book">
      <button>Add Book</button>
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
