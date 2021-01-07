import { connect } from 'react-redux';
import CategoryDetail from './category-detail';

import { fetchProductsActionsCreator as productsActions} from '../../redux/actions/products.actions';

const mapStateToProps = ({ productsData }) => ({
    productsData,
});

export default connect(mapStateToProps, {...productsActions})(CategoryDetail);
