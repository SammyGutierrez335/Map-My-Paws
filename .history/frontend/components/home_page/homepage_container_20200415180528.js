import { connect } from 'react-redux'
import { fetchWalks } from "../../actions/walk_actions.js"
import Homepage from "./homepage.jsx"
//pass createWalk as a function that we can use inside this component
// const mSTP = state => {
//     return {
//         walks: state.entities.walks
//     };
// };

const mDTP = dispatch => ({
    fetchWalks: authorId => dispatch(fetchWalks(authorId))
})
//takes walk component and connects it to mDTP
export default connect(null, mDTP)(Homepage)