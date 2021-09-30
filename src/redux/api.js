import { GET_BOOK, ADD_BOOK, REMOVE_BOOK } from './books/books';

export const getBooks = () => async (dispatch) => {
  const data = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books',
    { method: 'GET' },
  );
  const newData = await data.json();

  const formattedData = [];
  Object.keys(newData).forEach((key) => {
    formattedData.push({
      item_id: key,
      title: newData[key][0].title,
      category: newData[key][0].category,
    });
  });
  dispatch({ type: GET_BOOK, formattedData });
};

export const postBook = (payload, method) => async (dispatch) => {
  if (method === 'POST') {
    await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(payload),
      },
    );
    dispatch({ type: ADD_BOOK, payload });
  } else {
    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/${payload.item_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({ item_id: payload.item_id }),
      },
    );
    dispatch({ type: REMOVE_BOOK, payload });
  }
};
