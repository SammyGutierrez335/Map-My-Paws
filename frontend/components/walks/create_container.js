import { connect } from 'react-redux'
import { createWaypoint } from "../../actions/waypoint_actions"
import { updateWalk } from "../../actions/walk_actions"
import Walk from "./create.jsx"

const mSTP = state => {
    return {
        // walks: state.entities.walks
    };
};
const mDTP = dispatch => ({
    createWaypoint: waypoint => dispatch(createWaypoint(waypoint)),
    updateWalk: (walkInfo) => dispatch(updateWalk(walkInfo))
})

//takes walk component and connects it to mDTP
export default connect(mSTP, mDTP)(Walk)