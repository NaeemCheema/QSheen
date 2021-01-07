import React from 'react';
import {Platform} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {screens} from '../config';
import {icons} from '../helpers';
import Home from '../screens/home';
import DesignerStack from '../navigator/DesignerStack';
import BrandStack from '../navigator/BrandStack';
import AuthStack from '../navigator/AuthStack';
import CartStack from '../navigator/CartStack';

import styles from './bottomTabStyle';

const isIos = Platform.OS === "ios"; 
const BottomTabs = createBottomTabNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const barStyleIos = {
  tabBarOptions:{
    activeTintColor: "#CE8677",      
    inactiveTintColor: "#8F8E93",  
    style:styles.barStyle ,
    labelStyle:styles.labelStyle,
    iconStyle:styles.iconStyle,
  }
};

function tabNavigator() {
  return(
    <BottomTabs.Navigator headerMode='none' tabBarOptions={barStyleIos.tabBarOptions}>
      <BottomTabs.Screen
        name={screens.home}
        options={{
          tabBarLabel: screens.home,
          tabBarIcon: icons.home, 
        }}
        component={Home}
      />
      <BottomTabs.Screen
        name={screens.brandStack}
        options={{
          tabBarLabel: 'Outlets',
          tabBarIcon: icons.brand,
        }}
        component={BrandStack}
      />
      <BottomTabs.Screen
        name={screens.designerStack}
        options={{
          tabBarLabel: 'Designers',
          tabBarIcon: icons.designer,
        }}
        component={DesignerStack}
      />
      <BottomTabs.Screen
        name={screens.cartStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: icons.cart,
        }}
        component={CartStack}
      />
      <BottomTabs.Screen
        name={screens.authStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: icons.profile,
        }}
        component={AuthStack}
      />
    </BottomTabs.Navigator>
  );
}

function materialTabNavigator() {
  return (
    <MaterialBottomTabs.Navigator
      headerMode='none'
      activeColor="#CE8677"
      inactiveColor="#8F8E93"
      barStyle={styles.barStyle}
    >
      <MaterialBottomTabs.Screen
        name={screens.home}
        options={{
          tabBarLabel: screens.home,
          tabBarIcon: icons.home,
        }}
        component={Home}
      />
      <MaterialBottomTabs.Screen
        name={screens.brandStack}
        options={{
          tabBarLabel: screens.brands,
          tabBarIcon: icons.brand,
        }}
        component={BrandStack}
      />
      <MaterialBottomTabs.Screen
        name={screens.designerStack}
        options={{
          tabBarLabel: screens.designers,
          tabBarIcon: icons.designer,
        }}
        component={DesignerStack}
      />
      <MaterialBottomTabs.Screen
        name={screens.cartStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: icons.cart,
        }}
        component={CartStack}
      />
      <MaterialBottomTabs.Screen
        name={screens.authStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: icons.profile,
        }}
        component={AuthStack}
      />
    </MaterialBottomTabs.Navigator>
  );
}

export default isIos? materialTabNavigator : tabNavigator;
