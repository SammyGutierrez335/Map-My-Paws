//keeps track of all relational data

import { combineReducers } from 'redux';

import usersReducer from './users_reducer'
import waypointsReducer from './waypoints_reducer'

export default combineReducers({
    users: usersReducer,
    waypoints: waypointsReducer
})

//users is a key-value pair that points to usersReducer