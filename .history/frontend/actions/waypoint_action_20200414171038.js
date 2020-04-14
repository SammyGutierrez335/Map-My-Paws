import * as APIUtil from '../util/waypoint_api_util'
export const RECEIVE_WAYPOINTS = 'RECEIVE_WAYPOINTS';

export const receiveWaypoints = waypoints => ({
    type: RECEIVE_WAYPOINTS,
    waypoints
})

// returns a thunk which calls the APIUtil and then dispatches receiveWaypoints


export const fetchWalks = (authorId) => dispatch => (
    APIUtil.fetchWalks(authorId).then(walks => (
        dispatch(receiveWalks(walks))
    ))
)