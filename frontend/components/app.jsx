//component has hasChange event listener form hashRouter in root.jsx

import React from "react";
import { Route, Switch } from "react-router-dom"
import GreetingContainer from "./greeting/greeting_container"
import LoginFormContainer from "./session_form/login_form_container"
import SignupFormContainer from "./session_form/signup_form_container"
import { Link } from "react-router-dom"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash.jsx'
import homepage from './home_page/homepage.jsx'
import Navlinks from './header/navlinks.jsx'
import RoutesHome from './routes/home.jsx'
import new_route from './routes/create.jsx'


const App = () => (
    <div>
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
            <Route exact path="/" component={Splash} />
            <ProtectedRoute exact path="/my_home/#user_dashboard" component={homepage} />
            <Route exact path="/routes" component={RoutesHome} />
            <ProtectedRoute exact path="/routes/create" component={new_route} />
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
            {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
        </Switch>
    </div>
)

//hashRouter provides an event listener to check to see if path changes/matches and if so, it renders that container component.
export default App