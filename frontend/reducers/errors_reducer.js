//combines reducers that handle errors

import { combineReducer } from 'redux'
import sessions from './session_errors_reducer'

export default combineReducer({
    sessions
})
