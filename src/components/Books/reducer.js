import { RECEIVE_BOOK_DATA, REQUEST_BOOK_DATA } from "./actions.js";

let isFetching = false;
export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_BOOK_DATA:
     

    case RECEIVE_BOOK_DATA:
      

    default:
      return state;
  }
};