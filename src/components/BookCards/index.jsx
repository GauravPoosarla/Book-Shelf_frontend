import React from "react";
import "./BookCards.css";
import mockData from "../../mockData/data.json";
import Author from "../Author";

const BookCards = () => {
  const authors = Object.keys(mockData);
  return (
    <div className="book-cards">
      {authors.map((author) => {
        return <Author key={author} data={mockData[author]} author={author} />;
      })}
    </div>
  );
};

export default BookCards;
