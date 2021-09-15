import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {FavouritesContextProvider} from './store/favourites-context'


ReactDOM.render(
  <FavouritesContextProvider >
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>
  </FavouritesContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

