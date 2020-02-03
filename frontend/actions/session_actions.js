import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS'
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});
//clearErrors is created
export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const login = user => (dispatch) => (
    APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors.responseJSON))) //if it receives anything besides 200 then it goes to second callback.
);

export const signup = user => dipatch => (
    APIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    APIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
);

//what APIUtil.logout() returns.
//
// export const logout = () => {
//     return $.ajax({
//         url: '/api/session',
//         method: 'DELETE'
//     })
// }

