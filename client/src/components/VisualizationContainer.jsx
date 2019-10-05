import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getUser } from '../actions/user_actions';

import Visualization from './Visualization'

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    getUser: (id) => dispatch(getUser(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Visualization));