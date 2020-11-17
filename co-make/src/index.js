import './index.css';
import App from './App';
import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./store/reducers/fetchPostsReducer";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
