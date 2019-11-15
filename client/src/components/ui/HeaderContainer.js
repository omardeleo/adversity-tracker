import { connect } from 'react-redux';
import { Header } from './Header';
import { fetchAdversities } from '../../actions/adversity_actions';
import { setAdversity } from '../../actions/ui_actions';
import { updateForm } from '../../actions/form_actions';
import { createReflection } from '../../actions/reflection_actions';

const mapStateToProps = ({ entities, session, ui, form }) => ({
  currentUser: entities.users[session.id],
  adversities: Object.values(entities.adversities),
  active: ui.adversity_id,
  form: form
});

const mapDispatchToProps = dispatch => ({
  fetchAdversities: id => dispatch(fetchAdversities(id)),
  setAdversity: id => dispatch(setAdversity(id)),
  updateForm: data => dispatch(updateForm(data)),
  submitForm: data => dispatch(createReflection(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);