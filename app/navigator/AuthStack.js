import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Profile from '../screens/profile/index';
import ResetEmail from '../screens/reset-email';
import ResetPassword from '../screens/reset-password';
import ProfileSection from '../screens/profile/profile-section';
import Otp from '../screens/otp';

const AuthStack = createStackNavigator();

export default function authStack() {
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen  name={screens.profile} component={Profile} />
      <AuthStack.Screen  name={screens.resetemail} component={ResetEmail} />
      <AuthStack.Screen  name={screens.resetpassword} component={ResetPassword} />
      <AuthStack.Screen  name={screens.profilesection} component={ProfileSection} />
      <AuthStack.Screen  name={screens.otp} component={Otp} />
    </AuthStack.Navigator>
  );
}