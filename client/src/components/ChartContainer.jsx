import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAdversities } from '../actions/adversity_actions';
import { getAllAdversities } from '../reducers/selectors';
import ChartData from './ChartData';

const mapStateToProps = ({ session, entities: { users, adversities } }) => {
    return {
        currentUser: users[session.id],
        adversities: getAllAdversities(adversities),
    }
};

const mapDispatchToProps = dispatch => ({
    fetchAdversities: (id) => dispatch(fetchAdversities(id))
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ChartData));