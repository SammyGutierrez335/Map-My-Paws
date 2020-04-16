//home page that logged in users can see

import React from 'react'

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
        if(this.state.walks !== "undefined") {
         let walkDivs = this.state.walks.map(walk => {
            return <div className="walk-thumbnail">
                        <a>
                    <img src={window.defaultThumbnail} width="138" height="135"></img>
                    <div className="walk-info">{walk.title}</div>
                        </a>
                </div>
         })
         return walkDivs
        } else {
        return <h2>You have not gone on any walks yet.</h2>
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