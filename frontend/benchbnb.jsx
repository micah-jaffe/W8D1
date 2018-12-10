import React from 'react';
import ReactDOM from 'react-dom';

// TESTING
import configureStore from './store/store';
//

document.addEventListener('DOMContentLoaded', () => {

  // TESTING

  //

  // configure store
  const store = configureStore()
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>hello</h1>, root);
})