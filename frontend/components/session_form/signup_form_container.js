import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../util/session_api_util';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
  formType: 'signup',
  navLink: <Link to="/login">Login</Link>
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)