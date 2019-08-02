import { connect } from 'react-redux';

import {
    signup,
    clearErrors
} from '../actions/session_actions';

import SignUpForm from './SignUpForm';

const mapStateToProps = (state) => {
    return {
        loggedIn: Boolean(state.session.id),
        errors: state.errors.session,
        // eslint-disable-next-line
        formType: location.pathname.slice(1)
    };
};

const mapDispatchToProps = (dispatch, { location }) => {
    const formType = location.pathname.slice(1);
    // eslint-disable-next-line
    const processForm = (formType === 'login') ? login : signup;
    return {
        processForm: user => dispatch(processForm(user)),
        formType,
        // eslint-disable-next-line
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);