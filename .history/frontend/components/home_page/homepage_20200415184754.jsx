//home page that logged in users can see

import React from 'react'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        // this.renderWalks = this.renderWalks.bind(this)
        this.state = {}
    }

    componentDidMount() {
        this.setState({walks: this.props.fetchWalks()})
        //access this particular instance of the Map class
    }

    renderWalks(){
        return <div id="previous_walks_container">
        {this.state.walks.forEach(walk => {
            return <div>I am a walk</div>
        })}

            Previous Walks</div>
    }

    render() {
        return (
            <div className="home-page-window" >
               
                    {this.renderWalks()}
                    
                   
            </div>
        )
    }
}

export default Homepage