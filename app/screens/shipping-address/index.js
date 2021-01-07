import {connect} from 'react-redux';
import ShippingAddress from './shipping-address';
import {fetchCheckoutActionsCreator} from '../../redux/actions';

const mapStateToProps = ({cartData, authData, checkoutData}) => ({
  cartData,
  authData,
  checkoutData
})

export default connect(mapStateToProps, {
    ...fetchCheckoutActionsCreator
})(ShippingAddress);