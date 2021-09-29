import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

function NewBook() {
  const dispatch = useDispatch();

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newbook = {
      item_id: uuidv4(),
      title: e.target.title.value,
      category: e.target.category.value,
    };

    dispatch(postBook(newbook));

    e.target.title.value = '';
    e.target.category.value = '';
  };
  return (
    <div className="new-book">
      <p>ADD NEW BOOK</p>
      <form onSubmit={submitBookToStore} className="form-container">
        <input
          type="text"
          className="input-title"
          placeholder="Book title"
          name="title"
        />
        <input
          type="text"
          className="input-category"
          placeholder="category"
          name="category"
        />
        {/* <input
          type="text"
          className="input-category"
          placeholder="Category"
          name="category"
        /> */}
        <input type="submit" className="input-submit" value="Add book" />
      </form>
    </div>
  );
}

export default NewBook;
