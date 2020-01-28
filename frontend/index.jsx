import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from './store/store';

// import * as apiUtil from "./util/session_api_util.js"
// used for testing

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore();
    // TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // TESTING END

    ReactDOM.render(<Root store={store} />, root)
})
//renders root component passing in store as a prop.


//used for testing
// window.login = apiUtil.login
// window.signup = apiUtil.signup
// window.logout = apiUtil.logout
