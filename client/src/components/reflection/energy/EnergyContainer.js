import { connect } from "react-redux";
import { Energy } from "./Energy";
import { updateForm } from "../../../actions/form_actions";

const mapDispatchToProps = dispatch => ({
  updateForm: form => dispatch(updateForm(form))
});

export default connect(
  null,
  mapDispatchToProps
)(Energy);
