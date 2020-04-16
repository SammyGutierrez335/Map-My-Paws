import { RECEIVE_WALK, RECEIVE_WALKS } from "../../actions/walk_actions";

const walkReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WALK:
            return action.walk
        case RECEIVE_WALKS:
            debugger
            return Object.assign({}, state, action.walks)
        default:
            return state;
    }
}

export default walkReducer;