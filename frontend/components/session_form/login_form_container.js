import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

//destruction = ({ errors })
const mSTP = (state) => ({
    errors: state.errors.session, //
    formType: 'Login',
    navLink: <Link id="alt-link" to="/signup">Sign Up Instead</Link>,
})


//why do directions say to pass in ownProps?
const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user)),
        loginDemoUser: (user) => dispatch(login(user))
    };
};


export default connect(mSTP, mDTP)(SessionForm);