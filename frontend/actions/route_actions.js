import * as APIUtil from '../util/route_api_util'

export const RECEIVE_ROUTE = 'RECEIVE_ROUTE';

export const receiveRoute = route => ({
    type: RECEIVE_WAYPOINTS,
    route
})

// returns a thunk which calls the APIUtil and then dispatches receiveWaypoints
export const createRoute = (props) => dispatch => (
    APIUtil.createRoute(stuff).then(route => (
        dispatch(receiveRoute(route))
    ))
);



