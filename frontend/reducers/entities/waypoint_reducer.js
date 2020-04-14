import { RECEIVE_WAYPOINT, RECEIVE_WAYPOINTS } from "../../actions/walk_actions";

const waypointReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WAYPOINT:
            return actions.waypoint
        case RECEIVE_WAYPOINTS:
            return Object.assign({}, state, actions.waypoints)
        default:
            return state;
    }
}

export default waypointReducer;