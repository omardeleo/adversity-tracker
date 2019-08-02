import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Visualization from './Visualization'

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
};

export default withRouter(connect(
    mapStateToProps,
    null
)(Visualization));