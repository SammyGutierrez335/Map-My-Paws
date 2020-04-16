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
         return this.state.walks.map(walk => {
             return <div className="walk-thumbnail">
                 <p>
                     {walk.title}
                     </p>
                 </div>
         })
        } else {
            return null
        }
            
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