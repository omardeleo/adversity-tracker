import { connect } from 'react-redux';
import { Values } from './Values';
import { updateForm } from '../../../../actions/form_actions';

const mapStateToProps = ({ form }) => ({
  form: form
});

const mapDispatchToProps = dispatch => ({
  updateForm: data => dispatch(updateForm(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Values);