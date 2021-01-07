import {connect} from 'react-redux';
import Step3 from './step3';
import {onboardingActionCreator} from '../../../redux/actions';

const mapStateToProps = ({onboardingData}) => ({
  onboardingData,
})

export default connect(mapStateToProps,{...onboardingActionCreator})(Step3);