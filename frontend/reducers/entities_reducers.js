//keeps track of all relational data

import { combineReducers } from 'redux';

import users from './users_reducer'

export default combineReducers({
    users
})

//users is a key-value pair that points to usersReducer