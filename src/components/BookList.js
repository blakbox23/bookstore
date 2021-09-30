import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookItem from './BookItem';
import { getBooks } from '../redux/api';

const BookList = () => {
  const books = useSelector((state) => state.booksState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookItem key={book.item_id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
