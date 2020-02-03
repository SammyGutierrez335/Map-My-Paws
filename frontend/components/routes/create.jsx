//home page that all users can see

import { render } from "react-dom"
import React from 'react'

class route extends React.Component {
    componentDidMount() {
        const options = {
            center: { lat: 37.0902, lng: -95.7129 },
            zoom: 4
        }
        const map = document.getElementById("map")
        this.map = new google.maps.Map(map, options)
    }

    render() {
        return (
            <div className="mapcontainer" >
                <div id="map"></div>
            </div>
        )
    }


}

export default route