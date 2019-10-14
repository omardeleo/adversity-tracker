import { connect } from 'react-redux';
import { Beliefs } from './Beliefs';
import { updateForm } from '../../actions/form_actions';

const mapStateToProps = ({entities, forms}) => ({
  beliefs: forms.beliefForm
  // adversities: Object.values(entities.adversities) 
});

const mapDispatchToProps = dispatch => ({
  updateForm: beliefsForm => dispatch(updateForm(beliefsForm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beliefs);