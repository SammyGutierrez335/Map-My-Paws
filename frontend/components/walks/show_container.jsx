import { connect } from 'react-redux'
import { fetchWalk } from "../../actions/walk_actions"
import Show from "./show.jsx"
const mSTP = (state, ownProps) => {
    debugger
    let walk;
    let walkId = ownProps.match.params.id;

    if (state.entities.walks[walkId]) {
        walk = state.entities.walks[walkId];
    }

    return {
        walk, 
        walkId
    };
};
const mDTP = dispatch => ({
    fetchWalk: (walkId) => dispatch(fetchWalk(walkId))
})


//dispatch is built in redux function provided by connect
export default connect(mSTP, mDTP)(Show)