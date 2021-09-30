import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/api';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (book) => dispatch(postBook(book, 'DELETE'));

  return (
    <div className="book-item">
      <div className="item-left">
        <p className="cat-text">{book.category}</p>
        <p className="tit-text">{book.title}</p>
        <p className="auth-text">{book.author}</p>
        <ul className="crud-links">
          <li>comments</li>
          <li>
            <button onClick={() => removeBookFromStore(book)} type="button"> Remove </button>
          </li>
          <li>Edit</li>
        </ul>

      </div>

      <div className="item-right">

        <div className="complt-display">
          64% completed
        </div>
        <div className="prog-display">
          <p>current chapter</p>
          <p>chapter 17</p>
        </div>

      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
