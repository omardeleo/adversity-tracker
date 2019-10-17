import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAdversities } from '../actions/adversity_actions';
import { getAllAdversities } from '../reducers/selectors';
import { createBelief, fetchBeliefs } from '../actions/belief_actions';
import { setTitle } from '../actions/ui_actions';
import ChartData from './ChartData';

const mapStateToProps = ({ session, entities: { users, adversities } }) => {
    return {
        currentUser: users[session.id],
        adversities: getAllAdversities(adversities),
    };
};

const mapDispatchToProps = dispatch => ({
    fetchAdversities: (id) => dispatch(fetchAdversities(id)),
    fetchBeliefs: () => dispatch(fetchBeliefs()),
    setTitle: (title, id) => dispatch(setTitle(title, id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartData));