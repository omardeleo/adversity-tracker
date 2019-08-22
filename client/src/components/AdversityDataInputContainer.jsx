import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../actions/session_actions';
import { createAdversity } from '../actions/adversity_actions';
import AdversityDataInput from './AdversityDataInput';
import { clearTitle } from '../actions/ui_actions';

const mapStateToProps = ({ session, entities: { users, ui } }) => {
    return {
        currentUser: users[session.id],
        title: ui.recognition_title,
        adding: ui.adding_recognition,
        form: ui.recognition_form,
        adversity_id: ui.adversity_id
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    clearTitle: () => dispatch(clearTitle)
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdversityDataInput));