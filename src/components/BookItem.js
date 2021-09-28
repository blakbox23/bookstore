import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function BookItem() {
  const dispatch = useDispatch();

  const removeBookFromStore = () => dispatch(removeBook());

  return (
    <div className="book-item">
      <div className="item-left">
        <p>categories</p>
        <p>TITLE</p>
        <p>author</p>
        <ul className="crud-links">
          <li>comments</li>
          <li>
            <button onClick={removeBookFromStore} type="button"> Remove </button>
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
}

export default BookItem;
