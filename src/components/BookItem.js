import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = (id) => dispatch(removeBook(id));

  return (
    <div className="book-item">
      <div className="item-left">
        <p>{book.category}</p>
        <p>{book.title}</p>
        <p>author</p>
        <ul className="crud-links">
          <li>comments</li>
          <li>
            <button onClick={() => removeBookFromStore(book.item_id)} type="button"> Remove </button>
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
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
