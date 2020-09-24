import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer.js";
import { search } from "../src/components/SearchResults/saga.js";
import { book } from "../src/components/Books/saga.js";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";
import "../src/css/main.css";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(search);
sagaMiddleware.run(book);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();