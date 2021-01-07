import {createAction} from 'redux-actions';
import {
  FETCH_PRODUCTS_BY_CATEGORIES_REQUEST,
  FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORIES_FAILED,

  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILED,
} from '../types';

export const fetchProductsActionsCreator = {
  fetchProductsByCategoriesRequest: createAction(FETCH_PRODUCTS_BY_CATEGORIES_REQUEST),
  fetchProductsByCategoriesSuccess: createAction(FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS),
  fetchProductsByCategoriesFailed: createAction(FETCH_PRODUCTS_BY_CATEGORIES_FAILED),

  fetchProductDetailsRequest: createAction(FETCH_PRODUCT_DETAILS_REQUEST),
  fetchProductDetailsSuccess: createAction(FETCH_PRODUCT_DETAILS_SUCCESS),
  fetchProductDetailsFailed: createAction(FETCH_PRODUCT_DETAILS_FAILED),
}
