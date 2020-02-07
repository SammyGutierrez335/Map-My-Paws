//route creation page

import { render } from "react-dom"
import React from 'react'
import { Link } from 'react-router-dom'


class route extends React.Component {

    constructor(props) {
        super(props);
        this.state = { waypoints: [], searchLocation: "", routeName: "" }
        this.markers = []
        this.direction = new google.maps.DirectionsService();
        this.renderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                // icons: [false, { fillOpacity: 1, path: window.pawprints }, '25%', '25%'],
                strokeColor: "#0000FF",
                strokeOpacity: .5,
                strokeWeight: 5,
                zIndex: 5
            }
        });
    }

    componentDidMount() {
        let currentPosition = { lat: 37.0902, lng: -95.7129 }
        const options = {
            center: { lat: 37.0902, lng: -95.7129 },
            zoom: 4,
            zoomControl: true,
            fullscreenControl: true,
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
        });

        //click adds waypoint
        google.maps.event.addListener(this.map, 'click', (event) => {
            let lat = event.latLng.lat()
            let lng = event.latLng.lng()

            this.handleLeftClick([lat, lng]);
        });
        //removes waypoint
        google.maps.event.addListener(this.map, 'rightclick', (event) => {
            this.handleRightClick(this.state.waypoints.length - 1);
        });
    }

    handleLeftClick(coords) {
        this.setState({ waypoints: [...this.state.waypoints, coords] }) //setstate, waypoint slice of state is merged with new coords.
        let marker
        let position = { lat: coords[0], lng: coords[1] }
        let map = this.map
        if (typeof this.state.waypoints[1] === 'undefined') {
            marker = new google.maps.Marker({
                position: position,
                map: map,
                icon: window.pawIconGreen,
                clickable: true
            })
        } else {
            marker = new google.maps.Marker({
                position: { lat: coords[0], lng: coords[1] },
                map: this.map,
                icon: window.pawIconBlue,
                draggable: false,
            })
        }
        //adds marker
        this.markers.push(marker)
        google.maps.event.addListener(marker, 'click', this.endRoute)
        this.getDirections()
    }

    handleRightClick(index) {
        this.setState(state => {
            const waypoints = state.waypoints.filter((waypoint, j) => index !== j)

            return {
                waypoints
            }
        })
        this.markers.pop().setMap(null);
        this.getDirections()
    }

    getCurrentPosition() {
        let options = {
            enableHighAccuracy: true
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }
        navigator.geolocation.getCurrentPosition(this.setCurrentPosition.bind(this), error, options)
    }

    setCurrentPosition(GeolocationPostition) {
        //adjust for accuracy
        let currentPosition = { lat: (GeolocationPostition.coords.latitude + .00175916), lng: (GeolocationPostition.coords.longitude + .0046663752) }
        this.setState({ currentPosition })
        this.map.setCenter(this.state.currentPosition)
        this.map.setZoom(18)
    }

    setMapLocation() {
        let geocoder = new google.maps.Geocoder()
        geocoder.geocode({ address: this.state.searchLocation }, (result) => {
            let lat = result[0].geometry.location.lat()
            let lng = result[0].geometry.location.lng()
            let mapLocation = { lat, lng }
            this.setState({ mapLocation })
            this.map.setCenter(this.state.mapLocation)
            this.map.setZoom(18)
        })
    }


    getDirections() {
        const renderer = this.renderer
        this.renderer.setMap(this.map)
        this.renderer.setPanel(document.getElementById('directionsPanel'))
        let waypoints = this.state.waypoints;
        if (waypoints.length > 1) {
            let origin = { lat: waypoints[0][0], lng: waypoints[0][1] };
            let lastWaypoint = waypoints[waypoints.length - 1]
            let destination = { lat: lastWaypoint[0], lng: lastWaypoint[1] };
            let middlePointsArr = []
            for (let i = 1; i < waypoints.length - 1; i++) {
                middlePointsArr.push({
                    location: { lat: waypoints[i][0], lng: waypoints[i][1] },
                    stopover: false
                })
            }
            this.direction.route({
                origin: origin,
                destination: destination,
                travelMode: "WALKING",
                waypoints: middlePointsArr,
                optimizeWaypoints: false,
                provideRouteAlternatives: false,
            }, function (result, status) {
                if (status === 'OK') {
                    renderer.setDirections(result)
                }
            })
        } else {
            renderer.setMap(null)
        }
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }


    endRoute() {
        //saveRoute()
    }

    // saveRoute() {
    //     this.props.
    //
    // }

    render() {
        let waypoints = this.state.waypoints

        const waypointslis = waypoints.map((waypoint, i) =>
            <li key={i}>{waypoint}</li>)

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
                        <button className="search-button" onClick={this.setMapLocation.bind(this)}>Search</button>
                        <br />
                    </article>
                    <div id="map-details-input">
                        <label htmlFor="map-name">Name Your Route</label>
                        <div>
                            <input type="text" id="route-name-input-field"
                                placeholder="Name Your Route"
                                value={this.state.routeName}
                                onChange={this.update('routeName')}
                                autoComplete="off" />
                        </div>
                        <button onClick={this.saveRoute} className="search-button">Save Route</button>
                    </div>
                    <br />
                    <div id="directionsPanel"></div>
                </div>
                <div id="map"></div>
            </div>
        )
    }
}

export default route