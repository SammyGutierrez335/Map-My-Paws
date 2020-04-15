import { connect } from 'react-redux'
import { fetchWalks } from "../../actions/walk_actions"
import Homepage from "./homepage.jsx"
//pass createWalk as a function that we can use inside this component
const mSTP = state => {
    return {
        walks: state.entities.walks
    };
};

const mDTP = dispatch => {
    return debugger
    fetchWalks: walks => dispatch(fetchWalks(walks))
}
//takes walk component and connects it to mDTP
export default connect(mSTP, mDTP)(Homepage)