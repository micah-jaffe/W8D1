import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout } from './actions/session_actions';

// TESTING

//

document.addEventListener('DOMContentLoaded', () => {

  // TESTING
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  //

  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})