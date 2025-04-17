import React from "react";
import "./bookcard.css";
const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h4>{genre}</h4>
      <p>by {author}</p>
    </div>
  );
};

export default BookCard;