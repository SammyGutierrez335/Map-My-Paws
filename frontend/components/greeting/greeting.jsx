import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const loggedOutGreeting = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
        </nav>
    );

    //&nbsp is a non-breaking space
    const loggedInGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? loggedInGreeting() : loggedOutGreeting();
};


export default Greeting;