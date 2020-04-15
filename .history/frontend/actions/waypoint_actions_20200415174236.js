import * as APIUtil from '../util/waypoint_api_util'
export const RECEIVE_WAYPOINT = 'RECEIVE_WAYPOINT';
export const RECEIVE_WAYPOINTS = 'RECEIVE_WAYPOINTS';

export const receiveWaypoint = waypoint => ({
    type: RECEIVE_WAYPOINT,
    waypoint
})

export const receiveWaypoints = waypoints => ({
    type: RECEIVE_WAYPOINTS,
    waypoints
})

// returns a thunk which calls the APIUtil and then dispatches receiveWaypoints
export const createWaypoint = (waypoint) => dispatch => (
    APIUtil.createWaypoint(waypoint).then(waypoint => (
        dispatch(receiveWaypoint(waypoint))
    ))
);

// export const fetchWaypoints = (walkId) => dispatch => (
//     APIUtil.fetchWaypoints(walkId).then(waypoints => (
//         dispatch(receiveWaypoints(waypoints))
//     ))
// )