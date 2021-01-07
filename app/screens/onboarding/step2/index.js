import {connect} from 'react-redux';
import Step2 from './step2';

const mapStateToProps = ({onboardingData}) => ({
  onboardingData,
});

export default connect(mapStateToProps)(Step2);