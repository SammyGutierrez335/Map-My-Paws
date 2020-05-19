//home page that logged in users can see

import React from 'react'
import { Link } from 'react-router-dom'
class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.renderWalks = this.renderWalks.bind(this)
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchWalks().then(walks => this.setState({walks: walks.walks.array}))
    }

    renderWalks(){
        if(typeof(this.state.walks) === "object") {
            console.log(this.state.walks.length)
            if (this.state.walks.length === 0) {
                return <h2 className="dashboard-title">
                    <hr className="accent"></hr>
                    <span>What are you waiting for... <br />time for a walk!</span>
                    <hr className="accent"></hr>
                    <img src={window.noWalks}></img>
                     </h2>
            }
            debugger
            let walkDivs = this.state.walks.map(walk => {
                // if(walk.waypoints) {
                    return <Link to={`/walks/${walk.id}`} className="walk-thumbnail">
                        <a>
                            <img src={window.defaultThumbnail} width="138" height="135"></img>
                            <div className="walk-info">{walk.title}</div>
                        </a>
                    </Link>
                // }
                // return null
            })
            return walkDivs
        }
    }

    render() {
        return (
            <div className="home-page-window" >
                <div id="previous-walk-container">
                    <header>Previous Walks</header>
                    <div className="walk-thumbnails-container">
                        {this.renderWalks()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage