import {connect} from 'react-redux';
import Wishlist from './wishlist';
import {wishlistActionsCreator} from '../../redux/actions';

const mapStateToProps = ({wishlistData, authData}) => ({
  wishlistData,
  authData,
})

export default connect(mapStateToProps, {
  ...wishlistActionsCreator
})(Wishlist);
