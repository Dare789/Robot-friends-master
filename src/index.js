import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./container/App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import searchReducer from "./features/searchField";
import droidReducer from "./features/Droid";
 
const store = configureStore({
  reducer: {
    searchField: searchReducer,
    droid: droidReducer,
  }
})
       
ReactDOM.render(
  <Provider store={store}> 
    <App/>
  </Provider>,
  document.getElementById('root')
);
