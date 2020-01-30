import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Greeting = ({ history, currentUser, logout }) => {
    const loggedOutGreeting = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            &nbsp;or&nbsp;
      <Link to="/signup">Sign up!</Link>
        </nav>
    );

    const handleLogOut = () => {
        logout().then(() => { history.push("/") })
    }

    //&nbsp is a non-breaking space
    const loggedInGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={handleLogOut}>Log Out</button>
        </hgroup>
    );

    return currentUser ? loggedInGreeting() : loggedOutGreeting();
};


export default withRouter(Greeting);