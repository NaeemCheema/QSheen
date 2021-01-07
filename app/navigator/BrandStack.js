import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Brands from '../screens/brands';
import CategoryDetail from '../screens/category-detail';

const BrandStack = createStackNavigator();

export default function brandStack() {
  return (
    <BrandStack.Navigator headerMode='none'> 
      <BrandStack.Screen  name={screens.brands} component={Brands} />
    </BrandStack.Navigator>
  );
}