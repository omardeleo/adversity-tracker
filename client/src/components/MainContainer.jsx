import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../actions/session_actions';
import { setCurrentTab } from '../actions/ui_actions';
import Main from './Main';

const mapStateToProps = ({ session, entities: { users, ui } }) => {
    return {
        currentUser: users[session.id],
        currentTab: ui.tab
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    setCurrentTab: tab => dispatch(setCurrentTab(tab))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main));