import React from 'react';

function BookItem() {
  return (
    <div className="book-item">
      <div className="item-left">
        <p>categories</p>
        <p>TITLE</p>
        <p>author</p>
        <ul className="crud-links">
          <li>comments</li>
          <li>Remove</li>
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
