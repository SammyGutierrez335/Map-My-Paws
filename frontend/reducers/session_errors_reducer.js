//keeps track of error messages

import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions.js'

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state
    }
}

export default SessionErrorsReducer
//returns errors or if it receives a current user, returns no errors ([])
