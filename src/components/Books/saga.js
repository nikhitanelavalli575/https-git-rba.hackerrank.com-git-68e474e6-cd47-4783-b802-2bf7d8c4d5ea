import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_BOOK_DATA, receiveBookData } from "./actions.js";

const fetchBookData = async id => {
  try {
    const response = await fetch(
      "https://openlibrary.org/api/books?bibkeys=" +
        id +
        "&format=json&jscmd=data"
    );
    const book_results = await response.json();
    return book_results;
  } catch (e) {
    console.log(e);
  }
};

function* getBookData(action) {
  try {
    const book = yield call(fetchBookData, action.payload);
    yield put(receiveBookData(book));
  } catch (e) {
    console.log(e);
  }
}

export function* book() {
  yield takeLatest(REQUEST_BOOK_DATA, getBookData);
}