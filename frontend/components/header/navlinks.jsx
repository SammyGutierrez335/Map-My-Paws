//link buttons to assist in navigation

import { render } from "react-dom"
import { NavLink } from 'react-router-dom'
import React from 'react'

class navlinks extends React.Component {
    render() {
        return (
            <div className="nav-links" >
                <NavLink to="/Routes">Routes</NavLink>
                <NavLink to="/Friends">Friends</NavLink>
                <NavLink to="/Goals">Goals</NavLink>
            </div>
        )
    }
}

export default navlinks