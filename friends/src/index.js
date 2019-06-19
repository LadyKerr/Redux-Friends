import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import friendsReducer from "./reducers";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";


const store = createStore(
  friendsReducer,
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
<Provider state={store}>
  <App />
</Provider>,
  document.getElementById('root')
  );


