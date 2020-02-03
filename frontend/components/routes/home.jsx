import React from 'react'
import { ProtectedRoute } from '../../util/route_util'
import Toolbar from './toolbar.jsx'
class RoutesHome extends React.Component {

    render() {
        return (
            <div className="route-splash" >
                <ProtectedRoute exact path="/routes" component={Toolbar} />
            </div>
        )
    }


}

export default RoutesHome