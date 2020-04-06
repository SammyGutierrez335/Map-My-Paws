//link buttons to assist in navigation

import { render } from "react-dom"
import React from 'react'
import { Link } from "react-router-dom"

class navlinks extends React.Component {
    render() {
        return (
            < Link to="/my_home/#user_dashboard" >
                <img src={window.logo} />
            </Link >
        )
    }
}

export default navlinks

