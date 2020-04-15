//home page that logged in users can see

import React from 'react'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.renderWalks = this.renderWalks.bind(this)
        this.state = {
        }
    }
    renderWalks(){
        console.log("--->",this.props.fetchWalks())
        console.log("--->", this.state.walks)
    }

    render() {
        return (
            <div className="home-page-window" >
                <div id="previous_walk_container">
                    {this.renderWalks()}
                    
                    Previous Walks</div>
            </div>
        )
    }
}

export default Homepage