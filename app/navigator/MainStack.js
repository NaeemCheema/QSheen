import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../config';
import Step1 from '../screens/onboarding/step1';
import Step2 from '../screens/onboarding/step2';
import Step3 from '../screens/onboarding/step3';
import Recommendations from '../screens/recommendations';
import SearchResult from '../screens/search-result';
import CategoryDetail from '../screens/category-detail';

import FilterResult from '../screens/filter_results';
import SortResult from '../screens/sort_results';

import ProductDetails from '../screens/product-details';
import MeasurementsVideo from '../screens/product-details/measurements/measurements-video';
import Profile from '../screens/profile/index';
import ResetEmail from '../screens/reset-email';
import ResetPassword from '../screens/reset-password';
import ProfileSection from '../screens/profile/profile-section';
import Otp from '../screens/otp';
import Auth from '../screens/auth';

import CartStack from './CartStack';

const MainStack = createStackNavigator();

export default function mainStack() {
  return (
    <MainStack.Navigator headerMode='none'>
      <MainStack.Screen name={screens.step1} component={Step1} />
      <MainStack.Screen name={screens.step2} component={Step2} />
      <MainStack.Screen name={screens.step3} component={Step3} />
      <MainStack.Screen name={screens.searchresult} component={SearchResult} />
      <MainStack.Screen name={screens.recommendations} component={Recommendations} />
      <MainStack.Screen name={screens.filterresult} component={FilterResult} />
      <MainStack.Screen name={screens.sortresult} component={SortResult} />
      <MainStack.Screen name={screens.productDetails} component={ProductDetails} />
      <MainStack.Screen name={screens.measurementsVideo} component={MeasurementsVideo} />
      <MainStack.Screen name={screens.categorydetail} component={CategoryDetail} />
      <MainStack.Screen name={screens.profile} component={Profile} />
      <MainStack.Screen name={screens.resetemail} component={ResetEmail} />
      <MainStack.Screen name={screens.resetpassword} component={ResetPassword} />
      <MainStack.Screen name={screens.profilesection} component={ProfileSection} />
      <MainStack.Screen name={screens.otp} component={Otp} />
      <MainStack.Screen name={screens.auth} component={Auth} />
      <MainStack.Screen name={screens.cartStack} component={CartStack} />
    </MainStack.Navigator>
  );
}
