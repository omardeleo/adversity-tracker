import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchAdversities } from '../../../actions/adversity_actions';
import '../../AdversityTitle.css';

const Header = props => {

  let state = props.state;
  let accept = props.accept;
  let clear = props.clear;

  const defaultAdversity = (state.adversity === '') ? 'Select Adversity' : state.adversity;
  let adversitiesList = props.adversities.map((adv, i) => <option key={i} value={adv.id}>{adv.title}</option>);

  return (
      <div className="header-wrapper">
        <div className="adv-title">
          <div className="adv-title-label">Adversity Experience Title...</div>
          <div className="input-wrapper">
            <select onChange={handleInput('adversity_id')}>
              <option value={state.adversity_id}>{defaultAdversity}</option>
              {adversitiesList}
            </select>
          </div>
        </div>
        <div className="action-button-wrapper">
          <div className="action-button" onClick={accept}>accept</div>
          <div className="action-button" onClick={clear}>clear</div>
        </div>
      </div>
  );

};

const mapStateToProps = ({ ui, entities, session }) => ({
  currentUser: entities.users[session.id],
  adversityId: ui.adversity_id,
  adversityTitle: ui.recognition_form.title,
  adversities: Object.values(entities.adversities)
});

const mapDispatchToProps = dispatch => ({
  fetchAdversities: id => dispatch(fetchAdversities(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);