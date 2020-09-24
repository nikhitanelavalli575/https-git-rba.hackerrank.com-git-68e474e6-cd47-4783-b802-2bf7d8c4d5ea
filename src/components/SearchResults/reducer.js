import { RECEIVE_SEARCH_DATA, REQUEST_SEARCH_DATA } from "./actions.js";

let isFetching = false;
export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_DATA:
      

    case RECEIVE_SEARCH_DATA:
      

    default:
      return state;
  }
};