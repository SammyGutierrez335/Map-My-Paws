import React from "react";
import ReactDOM from "react-dom";
// import * as apiUtil from "./util/session_api_util.js"
// used for testing

// import Root from "./components/root"
// import configureStore from "./store/store"
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    // const store = configureStore();
    ReactDOM.render(<h1>Welcome to Map my Paws</h1>, root)
    // ReactDOM.render(<Root store={store} />, root)
})

//used for testing
// window.login = apiUtil.login
// window.signup = apiUtil.signup
// window.logout = apiUtil.logout