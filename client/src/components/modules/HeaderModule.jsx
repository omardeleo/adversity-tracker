import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { fetchAdversities } from '../../actions/adversity_actions';
import { setAdversity } from '../../actions/ui_actions';
import { updateForm } from '../../actions/form_actions';

const Header = props => {

  const {active, actions, adversities, setAdversity, fetchAdversities, currentUser, form} = props;
 
  const defaultAdversity = active ? active : 'Select Adversity';
  const adversitiesList = adversities.map(adv => <option key={adv.id} value={adv.id}>{adv.title}</option>);

  const handleInput = e => {
    setAdversity(e.target.value);
  }

  useEffect(() => {
    fetchAdversities(currentUser.id)
  },[fetchAdversities, currentUser.id]);

  useEffect(() => {
    updateForm({pending_form: {['adversity_id']: active}})
  }, [active])

  return (
      <div className="header-wrapper">
        <div className="header">
          <div className="header-label">Adversity Experience Title...</div>
          <div className="input-wrapper">
            <select onChange={handleInput}>
              <option value={active}>{defaultAdversity}</option>
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

const mapStateToProps = ({ entities, session, ui }) => ({
  currentUser: entities.users[session.id],
  adversities: Object.values(entities.adversities),
  active: ui.adversity_id,
  form: ui.forms
});

const mapDispatchToProps = dispatch => ({
  fetchAdversities: id => dispatch(fetchAdversities(id)),
  setAdversity: id => dispatch(setAdversity(id)),
  updateForm: data => dispatch(updateForm(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);