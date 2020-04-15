import { RECEIVE_WAYPOINT, RECEIVE_WAYPOINTS } from "../../actions/walk_actions";

const walkReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WALK:
            return actions.walk
        case RECEIVE_WALKS:
            return Object.assign({}, state, actions.walks)
        default:
            return state;
    }
}

export default walkReducer;