export const REQUEST_SEARCH_DATA = "REQUEST_SEARCH_DATA";
export const RECEIVE_SEARCH_DATA = "RECEIVE_SEARCH_DATA";

export const requestSearchData = search_query => ({
  type: REQUEST_SEARCH_DATA,
  payload: search_query
});
export const receiveSearchData = data => ({
  type: RECEIVE_SEARCH_DATA,
  payload: data
});