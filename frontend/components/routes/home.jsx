import React from 'react'
import { ProtectedRoute } from '../../util/route_util'
import Homepage from '../home_page/homepage.jsx'
import Toolbar from './toolbar.jsx'

class RoutesHome extends React.Component {
    render() {
        return (
            <div className="home-page" >
                <ProtectedRoute exact path="/routes" component={Toolbar} />
                <Homepage />
            </div>
        )
    }


}

export default RoutesHome