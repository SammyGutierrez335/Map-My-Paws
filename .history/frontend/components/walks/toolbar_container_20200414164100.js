import { connect } from "react-redux"
import {createWalk} from "../../actions/walk_actions"
import Toolbar from "./toolbar.jsx"
// const mapStateToProps = state => ({
//     movies: state.movies,
// });

const mapDispatchToProps = dispatch => ({
    createWalk: (walk) => dispatch(createWalk(walk)),
});
export default connect(null, mapDispatchToProps)(Toolbar);