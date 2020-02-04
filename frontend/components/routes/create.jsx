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
                <div id="info-panels">
                    <article id="map-location-input">
                        <label htmlFor="location-input-box">Choose Map Location</label>
                        <div id="location-input-container">
                            <input type="text" id="location-input-field" placeholder="Address or Zip Code"
                                defaultValue="" autoComplete="off" />
                            <a className="location-icon" title="Use My Current Location" href="#">
                                <span className="mapping-sprite"></span>
                            </a>
                        </div>
                        <button className="search-button">Search</button>
                        <br />
                    </article>
                    <div id="map-details-input">
                        <label htmlFor="map-name">Name Your Route</label>
                        <div>
                            <input type="text" id="map-name" name="name" placeholder="Route Name" value="" />
                        </div>
                        <button className="search-button">Save Route</button>
                    </div>
                    <br />
                    <div>
                        <div id="waypoints"><label>Directions</label></div>
                    </div>
                </div>
                <div id="map"></div>
            </div>
        )
    }


}

export default route