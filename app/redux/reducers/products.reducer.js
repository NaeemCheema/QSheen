import {
  FETCH_PRODUCTS_BY_CATEGORIES_REQUEST,
  FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS,
  FETCH_PRODUCTS_BY_CATEGORIES_FAILED,

  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILED,
  RESET_MESSAGES,
} from '../types';
  
const initialState = {
  requesting: false,
  error: null,
  success: null,
  name: null,
  data: null,
  productDetails: null,
};
  
export default function (state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case FETCH_PRODUCTS_BY_CATEGORIES_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null,
        success: null,
      };
    }
    case FETCH_PRODUCTS_BY_CATEGORIES_SUCCESS: {
      return {
        requesting: false,
        data: payload.responsedata,
        name: payload.name,
      };
    }
    case FETCH_PRODUCTS_BY_CATEGORIES_FAILED: {
      return {
        requesting: false,
        error: payload.error,
        data: null,
        name: null,
      }
    }
    case FETCH_PRODUCT_DETAILS_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null,
        success: null,
        productDetails: null,
      };
    }
    case FETCH_PRODUCT_DETAILS_SUCCESS: {
      return {
        ...state,
        requesting: false,
        success: null,
        productDetails: payload.productDetails,
      };
    }
    case FETCH_PRODUCT_DETAILS_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case RESET_MESSAGES: {
      return {
        ...state,
        success: null,
        error: null,
      };
    }
    default: return state;
  }
}
  