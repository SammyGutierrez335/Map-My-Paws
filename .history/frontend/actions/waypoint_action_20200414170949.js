import * as APIUtil from '../util/waypoint_api_util'

export const RECEIVE_WAYPOINT = 'RECEIVE_WAYPOINT';
export const RECEIVE_RECEIVE_WAYPOINTS = 'RECEIVE_RECEIVE_WAYPOINTS';

export const receiveWaypoint = waypoint => ({
    type: RECEIVE_WAYPOINT,
    waypoint
})

export const receiveWaypoint = waypoints => ({
    type: RECEIVE_WAYPOINTS,
    waypoints
})

// returns a thunk which calls the APIUtil and then dispatches receiveWaypoints
export const createWalk = (walk) => dispatch => (
    APIUtil.createWalk(walk).then(walk => (
        dispatch(receiveWalk(walk))
    ))
);

export const fetchWalks = (authorId) => dispatch => (
    APIUtil.fetchWalks(authorId).then(walks => (
        dispatch(receiveWalks(walks))
    ))
)