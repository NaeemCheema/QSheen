import {connect} from 'react-redux';
import Cart from './cart-info';
import {cartActionsCreator} from '../../redux/actions';

const mapStateToProps = ({cartData, authData}) => ({
  cartData,
  authData,
})

export default connect(mapStateToProps, {
  ...cartActionsCreator
})(Cart);
