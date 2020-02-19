//keeps track of all relational data

import { combineReducers } from 'redux';

import usersReducer from './users_reducer'
import walkReducer from './walk_reducer'

export default combineReducers({
    users: usersReducer,
    walks: walkReducer
})

//users is a key-value pair that points to usersReducer