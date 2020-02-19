# README

## Summary: 
Map My Paws is an app inspired by the website Map My Run. Map My Paws allows users to create dog walking routes that are saved onto their dashboard. Users can also track steps/miles walked over time and set personal goals. Users can comment and add 'wags' (likes) on other peoples routes and goals progress.

## Live Link:
https://map-my-paws.herokuapp.com/#/

## Technologies Used
Google Maps Javascript API
Google Directions Service
Google Geocode Service
Google Maps Places API
React
Redux

API Protection

## Key Features
User Auth
Maps API Setup
    setting up an api key
    protecting the api key in my rails application
    inserting protected api key
    load maps api to project in application.html.erb
    creating an instance of the Map class
Registering the Listeners
    
3 difficult things
One of the difficult things was teh collection of the waypoints into the slice of state.
Deleting Markers
Passing in directions and having the map find and use the coordinates (reverseGeocoder)
Polylines
Having my right clicking (removal of markers/waypoints) update the route.