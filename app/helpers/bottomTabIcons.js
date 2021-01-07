import React from 'react';
import {Image} from 'react-native';

import {images} from '../constants';

const icons= {
  profile: ( {color} ) => (
    <Image source={images.profile} style={{tintColor: color, width: 25, height: 25}} />
  ),
  home: ( {color} ) => (
    <Image source={images.home} style={{tintColor: color, width: 25, height: 25}} />
  ),
  cart: ( {color} ) => (
    <Image source={images.cart_bottom} style={{tintColor: color, width: 25, height: 25}} />
  ),
  brand: ( {color} ) => (
    <Image source={images.brands} style={{tintColor: color, width: 25, height: 25}} />
  ),
  designer: ( {color} ) => (
    <Image source={images.designers} style={{tintColor: color, width: 25, height: 25}} />
  ),
};

export { icons };
