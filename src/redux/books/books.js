const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const retrieveBooks = (payload) => ({
  type: GET_BOOK,
  payload,
});

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
      author: newData[key][0].author || 'Anonymous',
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case GET_BOOK:
      return action.formattedData;

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.item_id);

    default:
      return state;
  }
};

export default reducer;
