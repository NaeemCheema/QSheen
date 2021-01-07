import { connect } from 'react-redux';
import Home from './home';

import { fetchHomeActionsCreator as homeActions } from '../../redux/actions/home.actions';


const mapStateToProps = ({ homeData }) => ({
    homeData,
});

export default connect(mapStateToProps, {...homeActions})(Home);
