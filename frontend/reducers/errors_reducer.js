//combines reducers that handle errors

import { combineReducers } from 'redux'
import session from './session_errors_reducer'

export default combineReducers({
    session
})
