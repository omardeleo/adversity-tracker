import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchAdversities } from '../../actions/adversity_actions';

const Header = props => {

  const {state, actions, handleInput} = props;
 
  const defaultAdversity = (state.adversity === '') ? 'Select Adversity' : state.adversity;
  const adversitiesList = props.adversities.map((adv, i) => <option key={i} value={adv.id}>{adv.title}</option>);

  useEffect(() => {
    if (props.adversities.length === 0) {
      props.fetchAdversities(props.currentUser.id);
    }
  });

  return (
      <div className="header-wrapper">
        <div className="header">
          <div className="header-label">Adversity Experience Title...</div>
          <div className="input-wrapper">
            <select onChange={handleInput}>
              <option value={state.adversity_id}>{defaultAdversity}</option>
              {adversitiesList}
            </select>
          </div>
        </div>
        <div className="action-button-wrapper">
          <div className="action-button" onClick={actions.accept}>accept</div>
          <div className="action-button" onClick={actions.clear}>clear</div>
        </div>
      </div>
  );

};

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.id],
  adversities: Object.values(entities.adversities)
});

const mapDispatchToProps = dispatch => ({
  fetchAdversities: id => dispatch(fetchAdversities(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);