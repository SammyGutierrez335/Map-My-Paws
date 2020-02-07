//keeps track of all relational data

import { combineReducers } from 'redux';

import usersReducer from './users_reducer'
import routeReducer from './route_reducer'

export default combineReducers({
    users: usersReducer,
    routes: routeReducer
})

//users is a key-value pair that points to usersReducer