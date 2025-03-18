import React from 'react';

export default function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px'}}>
      <img src={book.image} alt={book.name} style={{ width: '100px', height: '100px' }} />
      <h2>{book.name}</h2>
      <p>Genre: {book.genre}</p>
      <p>Author: {book.author}</p>
    </div>
  );
}