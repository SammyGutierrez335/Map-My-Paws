import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

//destruction = ({ errors})
const mSTP = (state) => ({
    errors: state.session.errors, //is this correct? errors.session
    formType: 'signup',
    navLink: <Link to="/login">Log in instead</Link>,
})


//why do directions say to pass in ownProps?
const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};


export default connect(mSTP, mDTP)(SessionForm);