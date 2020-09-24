export const REQUEST_BOOK_DATA = "REQUEST_BOOK_DATA";
export const RECEIVE_BOOK_DATA = "RECEIVE_BOOK_DATA";

export const requestBookData = id => ({
  type: REQUEST_BOOK_DATA,
  payload: id
});
export const receiveBookData = data => ({
  type: RECEIVE_BOOK_DATA,
  payload: data
});