import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_SEARCH_DATA, receiveSearchData } from "./actions.js";

const fetchSearchData = async seach_query => {
  try {
    const response = await fetch(
      "https://openlibrary.org/search.json?" +
        seach_query.search_by +
        "=" +
        seach_query.search_word
    );
    const search_results = await response.json();
    return search_results;
  } catch (e) {
    console.log(e);
  }
};

function* getSearchData(action) {
  try {
    const search = yield call(fetchSearchData, action.payload);
    yield put(receiveSearchData(search));
  } catch (e) {
    console.log(e);
  }
}

export function* search() {
  yield takeLatest(REQUEST_SEARCH_DATA, getSearchData);
}