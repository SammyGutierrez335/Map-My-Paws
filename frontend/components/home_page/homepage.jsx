//home page that all users can see

import { render } from "react-dom"
import React from 'react'

class Homepage extends React.Component {


    render() {
        return (
            <div className="home_page_window" >
                <div id="previous_walk_container">Previous Walks</div>
            </div>
        )
    }


}

export default Homepage