import React from 'react'
import {connect} from 'react-redux'
class WalkShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            walk: null
        }
        this.getDirections = this.getDirections.bind(this)
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
            center: currentPosition,
            zoom: 4,
        }

        const map = document.getElementById("map")
       
        //access this particular instance of the Map class
        this.map = new google.maps.Map(map, options)


        this.props.fetchWalk(this.props.walkId).then(() => {
            this.setState({ 
                walk: this.props.walk,
                })
        }).then(this.getDirections)
    }

    setCurrentPosition(GeolocationPostition) {
        //adjustments for increased accuracy
        let currentPosition = { lat: (GeolocationPostition.coords.latitude + .00175916), lng: (GeolocationPostition.coords.longitude + .0046663752) }
        this.setState({ currentPosition }, () => {
            this.map.setCenter(this.state.currentPosition)
            this.map.setZoom(16)
        })
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
        let waypoints = this.props.fetchWaypoints(this.props.match.params.id)
        debugger
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

    render() {
        return (
            <div className="mapcontainer" >
                <div id="info-panels">
                    <div id="map-details-input">
                        <h2>{this.state.walkName}</h2>
                    </div>
                    <div id="directionsPanel"></div>
                    {this.getDirections()}
                </div>
                <div id="map"></div>
            </div>
        )
    }
}

export default WalkShow