import React from 'react';
import BookItem from './BookItem';

function BookList() {
  return (
    <div className="book-list">
      <BookItem />
      <BookItem />
      <BookItem />
    </div>
  );
}

export default BookList;
