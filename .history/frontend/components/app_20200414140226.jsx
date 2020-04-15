//component has hasChange event listener form hashRouter in root.jsx

import React from "react";
import Splashpage from './splash/splashpage.jsx'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import { Route, Switch } from "react-router-dom"

import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Homepage from './home_page/homepage.jsx'

import WalksHome from './walks/home.jsx'
import EditWalk from './walks/edit.jsx'

const App = () => (
    <div className="main">
        <Header/>
        <Switch>
            <Route exact path="/" component={Splashpage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/user_dashboard" component={Homepage} />
            <ProtectedRoute exact path="/walks" component={WalksHome} />
            <ProtectedRoute exact path="/walks/edit" component={EditWalk} />
        </Switch>
        <Footer />
    </div>
)

export default App