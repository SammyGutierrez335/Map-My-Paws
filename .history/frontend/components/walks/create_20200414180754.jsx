//route creation page

import { render } from "react-dom"
import React from 'react'
import { Link } from 'react-router-dom'

export default class Walk extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = { 
            waypoints: [], 
            searchLocation: "", 
            routeName: "",
            routeDetailsToggled: false,
            routeDirectionsToggled: false,
            walkId: props.walkId
        }
        this.markers = []
        this.useCurrentPosition = this.useCurrentPosition.bind(this)
        this.setCurrentPosition = this.setCurrentPosition.bind(this)
        this.renderRouteDetails = this.renderRouteDetails.bind(this)
        this.toggleRouteDetails = this.toggleRouteDetails.bind(this)
        this.renderRouteDirections = this.renderRouteDirections.bind(this)
        this.toggleRouteDirections = this.toggleRouteDirections.bind(this)
        this.saveWalk = this.saveWalk.bind(this)
        this.direction = new google.maps.DirectionsService();
        this.renderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: {
                strokeColor: "#0000FF",
                strokeOpacity: .5,
                strokeWeight: 5,
                zIndex: 5
            }
        });
    }

    componentDidMount() {
        //default coordinates for united states
        let currentPosition = { lat: 37.0902, lng: -95.7129 }
        const options = {
            center: { lat: 37.0902, lng: -95.7129 },
            zoom: 4,
        }
        const map = document.getElementById("map")
        this.setState({ currentPosition })
        //access this particular instance of the Map class
        this.map = new google.maps.Map(map, options)
        this.registerListeners();
    }

    registerListeners() {
        //left clicking adds waypoint
        google.maps.event.addListener(this.map, 'click', (event) => {
            let lat = event.latLng.lat()
            let lng = event.latLng.lng()
            this.handleLeftClick([lat, lng]);
        });

        //removes waypoint on rightclick
        google.maps.event.addListener(this.map, 'rightclick', (event) => {
            this.handleRightClick(this.state.waypoints.length - 1);
        });

    }

    handleLeftClick(coords) {
        this.setState({ waypoints: [...this.state.waypoints, coords] }) //setstate, waypoint slice of state is merged with new coords(waypoint).
        let marker
        let position = { lat: coords[0], lng: coords[1] }

        if (typeof this.state.waypoints[1] === 'undefined') {
            //defaults first paw marker to green
            marker = new google.maps.Marker({
                position: position,
                map: this.map,
                icon: window.pawIconGreen,
                clickable: true
            })
        } else {
            //all other paw markers are blue
            marker = new google.maps.Marker({
                position: { lat: coords[0], lng: coords[1] },
                map: this.map,
                icon: window.pawIconBlue,
                draggable: false,
            })
        }

        //adds marker to an array stored in state
        this.markers.push(marker)


        // code will allow user to click on a marker to end walk
        google.maps.event.addListener(marker, 'click', this.saveWalk)

        //get the directions to display in the info panels
        this.getDirections()
    }

    handleRightClick(index) {
        //removes last waypoint from state
        this.setState(state => {
            const waypoints = state.waypoints.filter((waypoint, j) => index !== j)
            return {
                waypoints
            }
        })
        //removes last marker
        this.markers.pop().setMap(null);

        //get the directions to display in the info panels
        this.getDirections()
    }



    //grabs the location coordinates of the device
    useCurrentPosition() {
        let options = {
            enableHighAccuracy: true
        }
        function error(err) {
            alert(`It seems that you have not allowed us 
            permission to use your location. 
            Please enable your location to utilize this feature.`);
        }
        navigator.geolocation.getCurrentPosition(this.setCurrentPosition, error, options)
    }



    setCurrentPosition(GeolocationPostition) {
        //adjustments for increased accuracy
        let currentPosition = { lat: (GeolocationPostition.coords.latitude + .00175916), lng: (GeolocationPostition.coords.longitude + .0046663752) }
        this.setState({ currentPosition })
        this.map.setCenter(this.state.currentPosition)
        this.map.setZoom(16)
    }



    //recenters map to address provided
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
        let waypoints = this.state.waypoints;
        
        renderer.setMap(this.map)
        renderer.setPanel(document.getElementById('directionsPanel'))
        
        if (waypoints.length > 1) {
            let origin = { lat: waypoints[0][0], lng: waypoints[0][1] };
            let lastWaypoint = waypoints[waypoints.length - 1]
            let destination = { lat: lastWaypoint[0], lng: lastWaypoint[1] };
            let middlePointsArr = []

            //iterates through middle waypoints and stores into middlePointsarr
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

    renderRouteDetails(){
        if(this.state.routeDetailsToggled) {
            return <div id="map-details-input">
                    <label htmlFor="map-name">Name Your Walk</label>
                        <div>
                            <input type="text" id="walk-name-input-field"
                                placeholder="Name Your Walk"
                                value={this.state.routeName}
                                onChange={this.update('routeName')}
                                autoComplete="complete?" />
                        </div>
                     <button onClick={this.saveWalk} className="search-button">Save Walk</button>
                    </div>
        } else {
            return <div></div>
        }
    }

    renderRouteDirections(){
        return this.state.routeDirectionsToggled ? <div id="directionsPanel"></div> : null
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    toggleRouteDetails(){
        return this.setState({
            routeDetailsToggled: !this.state.routeDetailsToggled
        })
    }

    toggleRouteDirections() {
        return this.setState({
            routeDirectionsToggled: !this.state.routeDirectionsToggled
        })
    }


    saveWalk() {
        this.state.waypoints.forEach(waypoint => {
            this.props.createWaypoint({walk_id: this.props.walkId, latitude: waypoint[0], longitude: waypoint[1]})
        })

        // this.props.createWalk(this.state)
        // console.log(this.state.routeName)
        // console.log(this.markers)
    }
    
    render() {
        let waypoints = this.state.waypoints
        console.log(this.state.walkId)
        return (
            <div className="mapcontainer" >
                <div id="info-panels">
                    <div id="map-location-input">
                        <label htmlFor="location-input-box">Choose Map Location</label>
                        <div id="location-input-container">
                            <input type="text" id="location-input-field"
                                placeholder="Address or Zip Code"
                                value={this.state.searchLocation}
                                onChange={this.update('searchLocation')}
                                autoComplete="off" />
                            <a className="location-icon" title="Use My Current Location">
                                {/* icon to set map to current location 103*/}
                                <img src={window.locationIcon} onClick={this.useCurrentPosition}></img>
                            </a>
                        </div>
                        <button className="search-button" onClick={this.setMapLocation.bind(this)}>Search</button>
                        <br />
                    </div>
                    <h3 onClick={this.toggleRouteDetails}>
                        {this.state.routeDetailsToggled ? <i className="fas fa-caret-down expand-button"></i> : <i className="fas fa-caret-right expand-button"></i> }
                        Route Details
                    </h3>
                    {this.renderRouteDetails()}
                    <h3 onClick={this.toggleRouteDirections}>
                        {this.state.routeDirectionsToggled ? <i className="fas fa-caret-down expand-button" ></i> : <i className="fas fa-caret-right expand-button"></i>}
                        Route Directions
                    </h3>
                    {this.renderRouteDirections()}                    
                </div>
                <div id="map"></div>
            </div>
        )
    }
}