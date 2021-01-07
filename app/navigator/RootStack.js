import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {screens} from '../config';
import {width, COLOR} from '../constants';
import BottomStack from './BottomTabStack';
import MainStack from './MainStack';
import Sidebar from '../screens/sidebar';

const RootNavigator = createStackNavigator();
const DrawerNavigator = createDrawerNavigator();

function DrawerStack() {
  return (
    <DrawerNavigator.Navigator
      drawerStyle={{
        backgroundColor: COLOR.WHITE,
        width,
      }}
      drawerContent={(props) => <Sidebar {...props} />}
      initialRouteName={screens.bottomTabs}
    >
      <DrawerNavigator.Screen name={screens.bottomTabs} component={BottomStack} />
    </DrawerNavigator.Navigator>
  );
}

export default function rootStack() {
  return (
    <RootNavigator.Navigator headerMode='none' initialRouteName={screens.sideMenu}>
      <RootNavigator.Screen name={screens.mainStack} component={MainStack} />
      <RootNavigator.Screen name={screens.sideMenu} component={DrawerStack} />
    </RootNavigator.Navigator>
  );
}
