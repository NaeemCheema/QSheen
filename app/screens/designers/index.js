import { connect } from 'react-redux';
import Designers from './designers';
import { designersActionsCreator as designersActions } from '../../redux/actions/designers.actions';


const mapStateToProps = ({ designersData }) => ({
    designersData,
});

export default connect(mapStateToProps, {...designersActions})(Designers);
