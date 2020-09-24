import { combineReducers } from "redux";
import search from "./components/SearchResults/reducer.js";
import book from "./components/Books/reducer.js";

export default combineReducers({
  search,
  book
});