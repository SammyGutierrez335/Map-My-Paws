import { connect } from "react-redux"

// const mapStateToProps = state => ({
//     movies: state.movies,
// });

const mapDispatchToProps = dispatch => ({
    createWalk: () => dispatch(fetchAllMovies()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Content);