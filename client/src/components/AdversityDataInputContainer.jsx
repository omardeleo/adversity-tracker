import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../actions/session_actions';
import { createAdversity } from '../actions/adversity_actions';
import AdversityDataInput from './AdversityDataInput';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    createAdversity: (adversity, callback) => dispatch(createAdversity(adversity, callback))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdversityDataInput));