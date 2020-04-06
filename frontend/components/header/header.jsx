//link buttons to assist in navigation

import { render } from "react-dom"
import React from 'react'
import Logo from "./logo.jsx"
import NavLinks from "./navlinks.jsx"
import GreetingContainer from "../greeting/greeting_container"

class navlinks extends React.Component {
    render() {
        return (
            <header>
                <Logo />
                <NavLinks />
                <GreetingContainer />
            </header>
        )
    }
}

export default navlinks

