import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  const signedInGreeting = () => (
    <nav className="header-group">
      <h2>Welcome {currentUser.username}</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );

  const signedOutGreeting = () => (
    <nav className="login-signup">
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );

  return currentUser ? signedInGreeting() : signedOutGreeting();
};

export default Greeting;