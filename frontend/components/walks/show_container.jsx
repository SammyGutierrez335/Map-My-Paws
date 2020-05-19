import { connect } from 'react-redux'
import { fetchWalk } from "../../actions/walk_actions"
import Show from "./show.jsx"
const mSTP = state => {
    return {
        // walk: state.entities.walk
    };
};
const mDTP = dispatch => ({
    fetchWalk: () => dispatch(fetchWalk())
})
//takes walk component and connects it to mDTP
export default connect(mSTP, mDTP)(Show)