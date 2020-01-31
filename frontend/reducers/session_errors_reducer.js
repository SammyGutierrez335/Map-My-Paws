//keeps track of error messages

import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_SESSION_ERRORS
} from '../actions/session_actions.js'
const _nullErrors = []

const sessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return [];
        case CLEAR_SESSION_ERRORS:
            return [];
        default:
            return state
    }
}

export default sessionErrorsReducer
//returns errors or if it receives a current user, returns no errors ([])
