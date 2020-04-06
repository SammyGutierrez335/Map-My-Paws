import React from 'react'
import { ProtectedRoute } from '../../util/route_util'
import Homepage from '../home_page/homepage.jsx'
import Toolbar from './toolbar.jsx'

class WalksHome extends React.Component {
    render() {
        return (
            <div className="home-page" >
                <ProtectedRoute exact path="/walks" component={Toolbar} />
                <Homepage />
            </div>
        )
    }


}

export default WalksHome