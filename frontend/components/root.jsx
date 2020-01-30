//

import React from "react";
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import App from "./app";

//accepts store as a prop
const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)
//App will be rendered for all routes in your app. 
//Routes are defined within App.jsx

export default Root