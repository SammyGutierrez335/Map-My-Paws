import React from 'react'
import { ProtectedRoute } from '../../util/route_util'
import Homepage from '../home_page/homepage.jsx'
import toolbarContainer from './toolbar_container.js'

class WalksHome extends React.Component {
    render() {
        return (
            <div className="home-page" >
                <ProtectedRoute exact path="/walks" component={toolbarContainer} />
                <Homepage />
            </div>
        )
    }


}

export default WalksHome