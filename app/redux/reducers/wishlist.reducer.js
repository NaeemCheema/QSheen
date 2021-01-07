import _ from 'lodash';
import {
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_SUCCESS,
    ADD_TO_WISHLIST_FAILED,
    FETCH_WISHLIST_REQUEST,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILED,
    DELETE_WISHLIST_ITEM_REQUEST,
    DELETE_WISHLIST_ITEM_SUCCESS,
    DELETE_WISHLIST_ITEM_FAILED,
} from '../types';

const initial_state = {
  requesting: false,
  success: null,
  error: null,

  data: [],
};

export default function (state = initial_state, action) {
  const { payload, type } = action;
  switch(type) {
    case ADD_TO_WISHLIST_REQUEST: {
      return {
        ...state,
        requesting: true,
        success: null,
        error: null
      };
    }
    case ADD_TO_WISHLIST_SUCCESS: {
      return {
        ...state,
        success: payload.success,
        data: [
          payload.cart_item,
          ...state.data,
        ],
      };
    }
    case ADD_TO_WISHLIST_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case FETCH_WISHLIST_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case FETCH_WISHLIST_SUCCESS: {
      return {
        ...state,
        requesting: false,
        data: payload,
      };
    }
    case FETCH_WISHLIST_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case DELETE_WISHLIST_ITEM_REQUEST: {
      return {
        ...state,
        requesting: false,
        error: null,
        success: null,
      };
    }
    case DELETE_WISHLIST_ITEM_SUCCESS: {
      const cart = _.filter(state.data.cart, cartItem => cartItem.product_id != payload.cart_item.product_id);
      return {
        ...state,
        requesting: false,
        success: payload.success,
        data: {
          cart: cart,
        }
      };
    }
    case DELETE_WISHLIST_ITEM_FAILED: {
      return {
        ...state,
        requesting: false,
      };
    }
    default: return state;
  }
}
