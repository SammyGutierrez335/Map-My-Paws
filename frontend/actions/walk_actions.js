import * as APIUtil from '../util/walk_api_util'

export const RECEIVE_WALK = 'RECEIVE_WALK';

export const receiveWALK = walk => ({
    type: RECEIVE_WALK,
    walk
})

// returns a thunk which calls the APIUtil and then dispatches receiveWaypoints
export const createWalk = (props) => dispatch => (
    APIUtil.createWalk(stuff).then(walk => (
        dispatch(receiveWalk(route))
    ))
);



