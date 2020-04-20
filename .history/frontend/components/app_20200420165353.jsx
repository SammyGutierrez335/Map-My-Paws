//component has hasChange event listener form hashRouter in root.jsx

import React from "react";
import Splashpage from './splash/splashpage.jsx'
import Header from './header/header.jsx'
import { Route, Switch } from "react-router-dom"

import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomepageContainer from './home_page/homepage_container.js'

import WalksHome from './walks/home.jsx'
import CreateContainer from './walks/create_container.js'

const App = () => (
    <div className="main">
        <Header/>
        <Switch>
            <ProtectedRoute exact path="/" component={Splashpage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/user_dashboard" component={HomepageContainer} />
            <ProtectedRoute exact path="/walks" component={WalksHome} />
            <ProtectedRoute exact path="/walks/create" component={CreateContainer} />
        </Switch>
    </div>
)

export default App