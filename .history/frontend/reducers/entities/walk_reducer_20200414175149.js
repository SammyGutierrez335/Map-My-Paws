import { RECEIVE_WALK, RECEIVE_WALKS } from "../../actions/walk_actions";

const walkReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WALK:
            debugger
            return actions.walk
        case RECEIVE_WALKS:
            return Object.assign({}, state, actions.walks)
        default:
            return state;
    }
}

export default walkReducer;