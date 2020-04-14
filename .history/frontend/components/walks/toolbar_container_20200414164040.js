import { connect } from "react-redux"
import {createWalk} from "../../actions/walk_actions"
// const mapStateToProps = state => ({
//     movies: state.movies,
// });

const mapDispatchToProps = dispatch => ({
    createWalk: (walk) => dispatch(createWalk(walk)),
});
export default connect(null, mapDispatchToProps)(Toolbar);