//link buttons to assist in navigation

import { render } from "react-dom"
import { NavLink } from 'react-router-dom'
import React from 'react'

class navlinks extends React.Component {
    render() {
        return (
            <div className="nav-links" >
                <NavLink to="/walks">Walks</NavLink>
                <NavLink to="/friends">Friends</NavLink>
                <NavLink to="/goals">Goals</NavLink>
            </div>
        )
    }
}

export default navlinks