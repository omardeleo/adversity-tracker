import { connect } from 'react-redux';
import { Beliefs } from './Beliefs';
import { updateForm } from '../../actions/form_actions';

const mapStateToProps = state => ({
  beliefs: state.forms.beliefForm
});

const mapDispatchToProps = dispatch => ({
  updateForm: beliefsForm => dispatch(updateForm(beliefsForm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beliefs);