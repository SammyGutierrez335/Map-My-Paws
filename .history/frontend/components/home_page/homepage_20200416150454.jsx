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
            console.log("------> has walks")
         let walkDivs = this.state.walks.map(walk => {
            return <div className="walk-thumbnail">{walk.title}</div>
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
                    <h2>Previous Walks</h2>
                    {this.renderWalks()}
                    Previous Walks</div>
            </div>
        )
    }
}

export default Homepage