import { connect } from 'react-redux';
import { Beliefs } from './Beliefs';
import { updateForm } from '../../../../actions/form_actions';
import { fetchAdversities } from '../../../../actions/adversity_actions';

const mapDispatchToProps = dispatch => ({
  fetchAdversities: id => dispatch(fetchAdversities(id)), 
  updateForm: data => dispatch(updateForm(data))
});

export default connect(null, mapDispatchToProps)(Beliefs);