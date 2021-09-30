const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = () => async () => {
  const data = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books',
  )
    .then((response) => response.json);
  const formattedData = [0];
  Object.keys(data).forEach((key) => {
    formattedData.push({
      item_id: key,
      title: data[key][0].title,
      category: data[key][0].category,
    });
  });
  console.log(`====== ${formattedData} =======`);

  // dispatch({ type: GET_BOOK, formattedData });
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
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BhqzrQ20oG4ih4qjaX67/books/${payload}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(payload),
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

      return action.payload;

    case REMOVE_BOOK:

      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
