import "./index.css";
import App from "./App";
import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { fetchPostsReducer } from "./store/reducers/fetchPostsReducer";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(fetchPostsReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
