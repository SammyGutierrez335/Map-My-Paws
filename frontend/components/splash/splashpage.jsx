//home page that all users can see
import { render } from "react-dom"
import React from 'react'
import { Link } from "react-router-dom"
import { Route, Switch } from "react-router-dom"

import LoginFormContainer from "../session_form/login_form_container"
import SignupFormContainer from "../session_form/signup_form_container"

import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import Homepage from '../home_page/homepage.jsx'

import WalksHome from '../walks/home.jsx'
import NewWalk from '../walks/create.jsx'
import Navlinks from '../header/navlinks.jsx'
import GreetingContainer from "../greeting/greeting_container"


class Splashpage extends React.Component {


    render() {
        return (
            <div className="splashpage" >
                <header>
                    <Link to="/my_home/#user_dashboard">
                        <img src={window.logo} />
                    </Link>
                    <Navlinks />
                    <GreetingContainer />
                </header>
                <Switch>
                    <AuthRoute exact path="/login" component={LoginFormContainer} />
                    <AuthRoute exact path="/signup" component={SignupFormContainer} />
                    <ProtectedRoute exact path="/my_home/#user_dashboard" component={Homepage} />
                    <ProtectedRoute exact path="/walks" component={WalksHome} />
                    <ProtectedRoute exact path="/walks/create" component={NewWalk} />
                </Switch>
            </div>
        )
    }


}

export default Splashpage