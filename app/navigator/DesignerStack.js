import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Designers from '../screens/designers';
import DesignerDetails from '../screens/designer-details';

const DesignerStack = createStackNavigator();

export default function designerStack() {
  return (
    <DesignerStack.Navigator headerMode='none'>
      <DesignerStack.Screen  name={screens.designers} component={Designers} />
      <DesignerStack.Screen  name={screens.designerdetail} component={DesignerDetails} />
    </DesignerStack.Navigator>
  );
}