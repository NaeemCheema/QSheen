import {connect} from 'react-redux';
import Step1 from './step1';

const mapStateToProps = ({onboardingData}) => ({
  onboardingData,
});

export default connect(mapStateToProps)(Step1);