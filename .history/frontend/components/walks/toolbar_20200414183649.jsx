import React from 'react'
import { Link } from 'react-router-dom'

const Toolbar = (props) => {
    return (
        <ul className="toolbar-container">
            <li>
                <Link className="toolbar-button" to="/walks/create" onClick={ () => {
                    props.createWalk({title: ""})
                    .then(walk => {
                        //sets to local storage key, value
                        localStorage.setItem("walkId", walk.walk.id)
                    })
                }}
                >Create A Walk</Link>
            </li>
        </ul>
    )
}

export default Toolbar