import React from 'react'
import { Link } from 'react-router-dom'

const Toolbar = (props) => {

    console.log(props)

    return (
        <ul className="toolbar-container">
            <li>
                <Link className="toolbar-button" to="/walks/create">Create A Walk</Link>
            </li>
        </ul>
    )
}

export default Toolbar