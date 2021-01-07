import {connect} from 'react-redux';
import ProductDetails from './product-details';
import { fetchProductsActionsCreator, userActionsCreator, cartActionsCreator,
  wishlistActionsCreator } from '../../redux/actions';

const mapStateToProps = ({productsData, authData, userData, wishlistData}) => ({
  productsData,
  authData,
  userData,
  wishlistData,
});

export default connect(mapStateToProps, {
  ...fetchProductsActionsCreator,
  ...userActionsCreator,
  ...cartActionsCreator,
  ...wishlistActionsCreator,
})(ProductDetails);
