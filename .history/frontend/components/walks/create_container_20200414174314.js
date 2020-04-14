import { connect } from 'react-redux'
import { createWaypoint } from "../../actions/waypoint_actions"
import Walk from "./create.jsx"
//pass createWalk as a function that we can use inside this component
const mSTP = state => {
    console.log(state)
    return {
        walk: state.entities.walks.id
    };
};
const mDTP = dispatch => ({
    createWaypoint: waypoint => dispatch(createWaypoint(waypoint))
})
//takes walk component and connects it to mDTP
export default connect(mSTP, mDTP)(Walk)