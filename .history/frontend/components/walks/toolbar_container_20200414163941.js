import { connect } from "react-redux"

// const mapStateToProps = state => ({
//     movies: state.movies,
// });

const mapDispatchToProps = dispatch => ({
    createWalk: (walk) => dispatch(createWalk(walk)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);