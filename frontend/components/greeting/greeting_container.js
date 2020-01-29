import { connect } from 'react-redux'

import { logout } from '../../actions/session_actions'
import Greeting from './greeting'

//destructering = ({ session, entities: { users } })
const mSTP = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}
//currentUser set up as a prop to be passed to greetings presentational component

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})
//logout action creator is passed as prop to presentiation component

export default connect(mSTP, mDTP)(Greeting)