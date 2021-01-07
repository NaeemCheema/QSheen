import { connect } from 'react-redux';
import Profile from './profile';
import {
  authActionsCreator
} from '../../redux/actions';

const mapStateToProps = ({ authData }) => ({
  authData,
});

export default connect(mapStateToProps, { ...authActionsCreator })(Profile);
