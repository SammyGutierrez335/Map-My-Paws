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
        if(this.state.walks) {
         let walkDivs = this.state.walks.map(walk => {
             debugger
             console.log(walk.title)
            return <div className="walk-thumbnail">
                        <a>
                    <img src={window.defaultThumbnail} width="138" height="135"></img>
                    <div className="walk-info">{walk.title}</div>
                        </a>
                </div>
         })
         return walkDivs
        } else {
            return null
        }
        debugger
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