import * as APIUtil from '../util/walk_api_util'

export const RECEIVE_WALK = 'RECEIVE_WALK';
export const RECEIVE_WALKS = 'RECEIVE_WALKS';

export const receiveWalk = walk => ({
    type: RECEIVE_WALK,
    walk
})

export const receiveWalks = walks => ({
    type: RECEIVE_WALKS,
    walks
})

// returns a thunk which calls the APIUtil and then dispatches receiveWaypoints
export const createWalk = (walk) => dispatch => (
    APIUtil.createWalk(walk).then(walk => (
        dispatch(receiveWalk(walk))
    ))
);

export const fetchWalks = () => dispatch => (
    APIUtil.fetchWalks().then(walks => (
        dispatch(receiveWalks(walks))
    ))
)

export const fetchWalk = () => dispatch => (
    APIUtil.fetchWalk().then(walk => (
        dispatch(recieveWalk(walk))
    ))
)

export const updateWalk = (walkInfo) => dispatch => {
    APIUtil.updateWalk(walkInfo).then(walk => {
        dispatch(receiveWalk(walk))
    })
}



// hits api_util, dispatches actions to reducer