import { connect } from 'react-redux';
import Auth from './auth';
import {
  authActionsCreator
} from '../../redux/actions';

const mapStateToProps = ({ authData }) => ({
  authData,
});

export default connect(mapStateToProps, { ...authActionsCreator })(Auth);
