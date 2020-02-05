//home page that all users can see

import { render } from "react-dom"
import React from 'react'
import { Link } from 'react-router-dom'


class route extends React.Component {

    constructor(props) {
        super(props);
        this.state = { waypoints: [], searchLocation: "" }
        this.markers = []
    }

    componentDidMount() {
        let currentPosition = { lat: 37.0902, lng: -95.7129 }
        const options = {
            center: { lat: 37.0902, lng: -95.7129 },
            zoom: 4
        }
        const map = document.getElementById("map")
        this.setState({ currentPosition })
        this.map = new google.maps.Map(map, options)
        this.registerListeners();
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            // this.props.updateFilter('bounds', bounds);
        });
        //click adds way
        google.maps.event.addListener(this.map, 'click', (event) => {
            let lat = event.latLng.lat()
            let lng = event.latLng.lng()

            this.handleLeftClick([lat, lng]);
        });
        google.maps.event.addListener(this.map, 'rightclick', (event) => {
            this.handleRightClick(this.state.waypoints.length - 1);
        });
    }

    handleLeftClick(coords) {
        this.setState({ waypoints: [...this.state.waypoints, coords] }) //setstate, waypoint slice of state is merged with new coords.
        let marker = new google.maps.Marker({
            position: { lat: coords[0], lng: coords[1] },
            map: this.map,
            icon: window.pawIconGreen
        })
        this.markers.push(marker)
    }

    handleRightClick(index) {
        this.setState(state => {
            const waypoints = state.waypoints.filter((waypoint, j) => index !== j)

            return {
                waypoints
            }
        })
        this.markers.pop().setMap(null);
    }
    // waypointsToLatLng(waypoints) {
    //     waypoints.map(waypoint => {
    //         { lat: waypoint[0], lng: [waypoint[1]] }
    //     })
    // }

    //     const getCoordsObj = latLng => ({
    //         lat: latLng.lat(),
    //         lng: latLng.lng()
    //     });

    //     const waypointsToLng = (waypoints) => ({
    //         waypoints.map(waypoint => {
    //             getCoordsObj(waypoint)
    //         })
    //     })

    //     let routeLine = new google.maps.Polyline({
    //         path: this.state.waypoints,
    //         geodesic: true,
    //         strokeColor: '#FF0000',
    //         strokeOpacity: 1.0,
    //         strokeWeight: 2
    //     })
    //     routeLine.setMap(this.map)
    getCurrentPosition() {
        let options = {
            enableHighAccuracy: true
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(this.setCurrentPosition.bind(this), error, options)
        console.log(GeolocationPosition)
    }

    setCurrentPosition(e, GeolocationPostition = this.state.searchLocation) {
        console.log(this.state.searchLocation)
        console.log(GeolocationPostition)
        //adjust for accuracy
        if (typeof GeolocationPostition === "string") {
            let geocoder = new google.maps.Geocoder()
            geocoder.geocode({ address: GeolocationPostition }, (result) => {
                let lat = result[0].geometry.location.lat()
                let lng = result[0].geometry.location.lng()
                let mapLocation = { lat, lng }
                this.setState({ mapLocation })
                this.map.setCenter(this.state.mapLocation)
                this.map.setZoom(18)
            })
        } else {
            let currentPosition = { lat: (GeolocationPostition.coords.latitude + .00175916), lng: (GeolocationPostition.coords.longitude + .0046663752) }
            this.setState({ currentPosition })
            this.map.setCenter(this.state.currentPosition)
            this.map.setZoom(18)
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        let waypoints = this.state.waypoints
        const waypointslis = waypoints.map((waypoint, i) => <li key={i}>{waypoint}</li>)
        return (
            <div className="mapcontainer" >
                <div id="info-panels">
                    <article id="map-location-input">
                        <label htmlFor="location-input-box">Choose Map Location</label>
                        <div id="location-input-container">
                            <input type="text" id="location-input-field"
                                placeholder="Address or Zip Code"
                                value={this.state.searchLocation}
                                onChange={this.update('searchLocation')}
                                autoComplete="off" />
                            <a className="location-icon" title="Use My Current Location">
                                <img src={window.locationIcon} onClick={this.getCurrentPosition.bind(this)}></img>
                            </a>
                        </div>
                        <button className="search-button" onClick={this.setCurrentPosition.bind(this)}>Search</button>
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
                        <div id="waypoints">
                            <label>Directions</label>
                            <ul>
                                {waypointslis}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </div>
        )
    }
}

export default route