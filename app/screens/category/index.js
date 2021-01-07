import { connect } from 'react-redux';
import Category from './category';
import { fetchCategoriesActionsCreator as categoriesActions } from '../../redux/actions/categories.actions';


const mapStateToProps = ({ categoriesData }) => ({
    categoriesData,
});
export default connect(mapStateToProps, {...categoriesActions})(Category);
