//home page that all users can see

import { render } from "react-dom"
import React from 'react'
import Navlinks from '../header/navlinks.jsx'
import GreetingContainer from "../greeting/greeting_container"

class Homepage extends React.Component {


    render() {
        return (
            <div className="home_page_window" >
                <header>
                    <Link to="/my_home/#user_dashboard">
                        <img src={window.logo} />
                    </Link>
                    <Navlinks />
                    <GreetingContainer />
                </header>
                <Switch>
                    <ProtectedRoute exact path="/my_home/#user_dashboard" component={homepage} />
                    <Route exact path="/walks" component={WalksHome} />
                    <ProtectedRoute exact path="/walks/create" component={NewWalk} />
                </Switch>
                <div id="previous_walk_container">Previous Walks</div>
            </div>
        )
    }


}

export default Homepage