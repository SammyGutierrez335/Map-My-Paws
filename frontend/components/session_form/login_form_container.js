import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form.jsx';

//destruction = ({ errors })
const mSTP = (state) => ({
    errors: state.errors.session, //
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
})


//why do directions say to pass in ownProps?
const mDTP = (dispatch) => {
    return {
        processForm: (user) => dispatch(login(user))
    };
};


export default connect(mSTP, mDTP)(SessionForm);