import { connect } from 'react-redux';
import { Header } from './Header';
import { fetchAdversities } from '../../actions/adversity_actions';
import { setAdversity } from '../../actions/ui_actions';
import { updateForm } from '../../actions/form_actions';
import { createBelief } from '../../actions/belief_actions';

const mapStateToProps = ({ entities, session, ui, forms }) => ({
  currentUser: entities.users[session.id],
  adversities: Object.values(entities.adversities),
  active: ui.adversity_id,
  forms: forms
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