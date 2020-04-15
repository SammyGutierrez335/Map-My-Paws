import { RECEIVE_WALK, RECEIVE_WALKS } from "../../actions/walk_actions";

const walkReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WALK:
            return action.walk
        case RECEIVE_WALKS:
            return Object.assign({}, state, action.walks)
        default:
            return state;
    }
}

export default walkReducer;