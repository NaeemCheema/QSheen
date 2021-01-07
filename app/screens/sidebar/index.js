import { connect } from 'react-redux';
import Sidebar from './sidebar';

import { fetchCategoriesActionsCreator as categoriesActions } from '../../redux/actions/categories.actions';

const mapStateToProps = ({ categoriesData, profileData }) => ({
    categoriesData, profileData
});

export default connect(mapStateToProps, {...categoriesActions})(Sidebar);
