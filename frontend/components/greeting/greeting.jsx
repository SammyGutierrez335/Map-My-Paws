import React from "react";
import { withRouter, Link } from "react-router-dom";

const Greeting = ({ history, currentUser, logout, clearErrors }) => {
  const loggedOutGreeting = () => (
    <nav className="login-signup">
      <Link to="/login" onClick={clearErrors}>
        Log in
      </Link>
      &nbsp;&nbsp;
      <Link to="/signup" onClick={clearErrors}>
        Sign up!
      </Link>
    </nav>
  );

  const handleLogOut = () => {
    if(localStorage.getItem("walkId")){
      localStorage.removeItem("walkId")
    }
    
    logout().then(() => {
      history.push("/");
    });
  };

  //&nbsp is a non-breaking space
  const loggedInGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="logout-button" onClick={handleLogOut}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? loggedInGreeting() : loggedOutGreeting();
};

export default withRouter(Greeting);
