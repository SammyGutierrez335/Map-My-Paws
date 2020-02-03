import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

//destruction = ({ errors})
const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login">Log In Instead</Link>,
})

const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};


export default connect(mSTP, mDTP)(SessionForm);