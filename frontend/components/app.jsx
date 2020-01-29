import React from "react";
import { Route, Switch } from "react-router-dom"
import GreetingContainer from "./greeting/greeting_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash.jsx'

const App = () => (
    <div>
        <header>
            <h1>Map My Paws</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={Splash} />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
            {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        </Switch>
    </div>
)

export default App