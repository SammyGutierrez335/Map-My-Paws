import React from 'react'
import { Link } from 'react-router-dom'
const Toolbar = () => {
    return (
        <ul className="toolbar-container">
            <li>
                <Link className="toolbar-button" to="/routes/create">Create A Route</Link>
            </li>
        </ul>
    )
}

export default Toolbar