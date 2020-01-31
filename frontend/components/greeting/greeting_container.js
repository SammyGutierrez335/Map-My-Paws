import { connect } from 'react-redux'

import { logout } from '../../actions/session_actions'
import { clearErrors } from '../../actions/session_actions'
import Greeting from './greeting'

//destructering = ({ session, entities: { users } })
//currentUser set up as a prop to be passed to greetings presentational component
const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
})
//logout action creator is passed as prop to presentiation component

export default connect(mSTP, mDTP)(Greeting)