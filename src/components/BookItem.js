import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/api';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (book) => dispatch(postBook(book, 'DELETE'));

  return (
    <div className="book-item flex">
      <div className="item-left">
        <p className="cat-text">{book.category}</p>
        <p className="tit-text">{book.title}</p>
        <p className="auth-text">{book.author}</p>
        <ul className="crud-links flex">
          <li>
            <button onClick={() => removeBookFromStore(book)} className="remove-btn" type="button"> Remove </button>
          </li>
        </ul>

      </div>

      <div className="item-right flex">

        <div className="complt-display flex">
          <div className="Oval-2" />
          <div>
            <span className="percentage">64%</span>
            completed
          </div>
        </div>
        <div className="prog-display">
          <p className="curr-chap">CURRENT CHAPTER</p>
          <p className="chap-num">Chapter 17</p>
          <button className="update-prog" type="button">UPDATE PROGRESS</button>
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
