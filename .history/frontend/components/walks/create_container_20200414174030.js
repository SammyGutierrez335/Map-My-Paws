import { connect } from 'react-redux'

//pass createWalk as a function that we can use inside this component
const mSTP = state => {
    console.log(state)
    return {
        walk: state.entities.walk
    };
};
const mDTP = dispatch => ({
    createWaypoint: waypoint => dispatch(createWaypoint(waypoint))
})
//takes walk component and connects it to mDTP
export default connect(mSTP, mDTP)(Walk)