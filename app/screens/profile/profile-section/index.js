import { connect } from 'react-redux';
import ProfileSection from './profile-section';
import {
    profileActionsCreator
} from '../../../redux/actions';

const mapStateToProps = ({ authData, profileData }) => ({
    authData, profileData,
});

export default connect(mapStateToProps, { ...profileActionsCreator })(ProfileSection);