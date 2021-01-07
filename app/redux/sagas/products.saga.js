import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  FETCH_PRODUCTS_BY_CATEGORIES_REQUEST,
  FETCH_PRODUCT_DETAILS_REQUEST,
} from '../types';

import {
  fetchProductsActionsCreator,
} from '../actions/products.actions';

import { fetchProductsByCategories, fetchProductDetails } from '../api';

function* fetchProductsByCategoriesSaga({ payload }) {
  try {
    const response = yield call(fetchProductsByCategories, payload);
    yield put(fetchProductsActionsCreator.fetchProductsByCategoriesSuccess(response));
  } catch(err) {
    const error = err || 'PRODUCTS BY CATEGORIES CANNOT BE FIND';
    yield put(fetchProductsActionsCreator.fetchProductsByCategoriesFailed({error}));
  }
}

function* fetchProductDetailsSaga({ payload }) {
  try {
    const response = yield call(fetchProductDetails, payload);
    console.log("fetchProductDetails: ", response);
    yield put(fetchProductsActionsCreator.fetchProductDetailsSuccess({ productDetails: { 
      details: response.responsedata.data, 
      similarProducts: response.responsedata.product_samilar,
      imageSlider: response.responsedata.image_slider,
      productReviews: response.responsedata.product_reviews,
      variations: response.responsedata.avail_variations2,
      designer: response.responsedata.design_by
    } }))
  } catch (err) {
    const error = err || 'PRODUCT CANNOT FOUND';
    yield put(fetchProductsActionsCreator.fetchProductDetailsFailed({error}));
  }
}

function* watchFetchfetchProductsByCategories() {
  while(true) {
    const action = yield take(FETCH_PRODUCTS_BY_CATEGORIES_REQUEST);
    yield *fetchProductsByCategoriesSaga(action);
  }
}

function* watchFetchProductDetails() {
  while(true) {
    const action = yield take(FETCH_PRODUCT_DETAILS_REQUEST);
    yield *fetchProductDetailsSaga(action); 
  }
}

export default function* () {
  yield all([
    fork(watchFetchfetchProductsByCategories),
    fork(watchFetchProductDetails),
  ]);
}
