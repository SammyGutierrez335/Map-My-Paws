import { RECEIVE_WAYPOINTS } from "../../actions/waypoint_actions";

const waypointsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_WAYPOINTS:
            return action.waypoints;
        default:
            return state;
    }
}

export default waypointsReducer;