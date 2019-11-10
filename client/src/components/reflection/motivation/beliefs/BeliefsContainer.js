import { connect } from 'react-redux';
import { Beliefs } from './Beliefs';
import { updateForm } from '../../../../actions/form_actions';
import { createBelief } from '../../../../actions/belief_actions';
import { fetchAdversities } from '../../../../actions/adversity_actions';

const mapDispatchToProps = dispatch => ({
  fetchAdversities: id => dispatch(fetchAdversities(id)), 
  updateForm: form => dispatch(updateForm(form)),
  submitForm: form => dispatch(createBelief(form))
});

export default connect(null, mapDispatchToProps)(Beliefs);