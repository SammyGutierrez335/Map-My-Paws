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

            return <div className="walk-thumbnail">
                        <a>
                    <img background="blue" src="app/assets/images/thumbnails/default_paws.png">
                            </img>
                        </a>
                    <div class="walk-info">{walk.title}</div>
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