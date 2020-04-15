import React from 'react'
import { ProtectedRoute } from '../../util/route_util'
import HomepageContainer from '../home_page/homepage_container.js'
import toolbarContainer from './toolbar_container.js'

class WalksHome extends React.Component {
    render() {
        debugger
        return (
            <div className="home-page" >
                <ProtectedRoute exact path="/walks" component={toolbarContainer} />
                <HomepageContainer />
            </div>
        )
    }


}

export default WalksHome