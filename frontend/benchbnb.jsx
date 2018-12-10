import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

// TESTING
import configureStore from './store/store';
//

document.addEventListener('DOMContentLoaded', () => {

  // TESTING

  //

  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})