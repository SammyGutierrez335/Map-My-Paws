//component has hasChange event listener form hashRouter in root.jsx

import React from "react";
import { Route, Switch } from "react-router-dom"
import GreetingContainer from "./greeting/greeting_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash.jsx'
import Welcome from './welcome/welcome.jsx'
import Navlinks from './header/navlinks.jsx'
const App = () => (
    <div>
        <header>
            <img className="logo" src={window.logo} />
            <Navlinks />
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={Splash} />
            <Route exact path="/welcome" component={Welcome} />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
            {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
        </Switch>
    </div>
)

//hashRouter provides an event listener to check to see if path changes/matches and if so, it renders that container component.
export default App