import { connect } from 'react-redux';

import {
    login,
    clearErrors
} from '../actions/session_actions';

import SignInForm from './SignInForm';

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
    return {
        formType,
        login: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);