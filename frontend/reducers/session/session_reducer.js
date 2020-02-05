import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../../actions/session_actions';

//session_reducer keeps track of current user

//This sessionReducer maintains its own default state by 
//the object that is passed in as a default argument to sessionReducer 
//with id set to null.

const _nullUser = Object.freeze({
    id: null
});

const sessionReducer = (state = _nullUser, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return state;
    }
};

export default sessionReducer;