import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchAdversities } from '../../actions/adversity_actions';
import { setAdversity } from '../../actions/ui_actions';
import { updateForm } from '../../actions/form_actions';
import { createBelief } from '../../actions/belief_actions';

const Header = props => {

  const {active, adversities, setAdversity, fetchAdversities, currentUser, form, submitForm, updateForm} = props;

  const defaultState = { adversity_id: active };
  const [state, setState] = useState(defaultState);

  const defaultAdversity = active ? active : 'Select Adversity';
  const adversitiesList = adversities.map(adv => <option key={adv.id} value={adv.id}>{adv.title}</option>);

  const handleInput = key => e => {
    let value = e.target ? e.target.value : e.value;
    setState({
      ...state,
      [key]: value
    });
    setAdversity(value);
  };

  const handleAccept = () => {
    submitForm(form);
  };

  const handleClear = () => {
    console.log('clear');
  }

  useEffect(() => {
    fetchAdversities(currentUser.id)
  },[fetchAdversities, currentUser.id]);

  useEffect(() => {
    debugger
    updateForm(state);
  }, [updateForm, state]);

  return (
      <div className="header-wrapper">
        <div className="header">
          <div className="header-label">Adversity Experience Title...</div>
          <div className="input-wrapper">
            <select onChange={handleInput('adversity_id')}>
              <option value={active}>{defaultAdversity}</option>
              {adversitiesList}
            </select>
          </div>
        </div>
        <div className="action-button-wrapper">
          <div className="action-button" onClick={handleAccept}>accept</div>
          <div className="action-button" onClick={handleClear}>clear</div>
        </div>
      </div>
  );

};

const mapStateToProps = ({ entities, session, ui }) => ({
  currentUser: entities.users[session.id],
  adversities: Object.values(entities.adversities),
  active: ui.adversity_id,
  form: ui.forms
});

const mapDispatchToProps = dispatch => ({
  fetchAdversities: id => dispatch(fetchAdversities(id)),
  setAdversity: id => dispatch(setAdversity(id)),
  updateForm: data => dispatch(updateForm(data)),
  submitForm: form => dispatch(createBelief(form))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);