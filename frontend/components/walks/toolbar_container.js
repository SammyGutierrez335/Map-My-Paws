import { connect } from "react-redux"
import {createWalk} from "../../actions/walk_actions"
import Toolbar from "./toolbar"

const mapDispatchToProps = dispatch => ({
    createWalk: (walk) => dispatch(createWalk(walk)),
});
export default connect(null, mapDispatchToProps)(Toolbar);