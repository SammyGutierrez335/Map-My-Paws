import * as APIUtil from '../util/waypoint_api_util'
export const RECEIVE_WAYPOINT = 'RECEIVE_WAYPOINT';
export const RECEIVE_WAYPOINTS = 'RECEIVE_WAYPOINTS';

export const receiveWaypoint = waypoints => ({
    type: RECEIVE_WAYPOINT,
    waypoint
})

export const receiveWaypoints = waypoints => ({
    type: RECEIVE_WAYPOINTS,
    waypoints
})

// returns a thunk which calls the APIUtil and then dispatches receiveWaypoints
export const createWa = (walk) => dispatch => (
    APIUtil.createWalk(walk).then(walk => (
        dispatch(receiveWalk(walk))
    ))
);

export const fetchWalks = (authorId) => dispatch => (
    APIUtil.fetchWalks(authorId).then(walks => (
        dispatch(receiveWalks(walks))
    ))
)