import {combineReducers} from 'redux';

import onboardingData from './onboarding.reducer';
import authData from './auth.reducer';
import designersData from './designers.reducer';
import categoriesData from './categories.reducer';
import brandsData from './brands.reducer';
import homeData from './home.reducer';
import productsData from './products.reducer';
import userData from './user.reducer';
import cartData from './cart.reducer';
import profileData from './profile.reducer';
import checkoutData from './checkout.reducer';
import wishlistData from './wishlist.reducer';

export default combineReducers({
  onboardingData, authData, designersData, categoriesData, brandsData,
  homeData, productsData, userData, cartData, profileData, checkoutData,
  wishlistData
});
