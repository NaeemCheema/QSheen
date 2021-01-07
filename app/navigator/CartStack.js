import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Cart from '../screens/cart';
import ShippingAddress from '../screens/shipping-address';
import Payment from '../screens/payment';
import CreditInfo from '../screens/credit-info';
import Webview from '../screens/webview';

const CartStack = createStackNavigator();

export default function cartStack() {
  return (
    <CartStack.Navigator headerMode='none'>
      <CartStack.Screen  name={screens.cart} component={Cart} />
      <CartStack.Screen  name={screens.shippingaddress} component={ShippingAddress} />
      <CartStack.Screen  name={screens.webView} component={Webview} />
      <CartStack.Screen  name={screens.payment} component={Payment} />
      <CartStack.Screen  name={screens.creditinfo} component={CreditInfo} />
    </CartStack.Navigator>
  );
}