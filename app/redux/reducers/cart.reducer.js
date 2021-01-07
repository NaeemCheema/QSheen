import _ from 'lodash';
import {
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILED,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_CART_FAILED,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILED,
  DELETE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM_FAILED,
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
    case ADD_TO_CART_REQUEST: {
      return {
        ...state,
        requesting: true,
        success: null,
        error: null
      };
    }
    case ADD_TO_CART_SUCCESS: {
      return {
        ...state,
        success: payload.success,
        data: [
          payload.cart_item,
          ...state.data,
        ],
      };
    }
    case ADD_TO_CART_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case FETCH_CART_REQUEST: {
      return {
        ...state,
        requesting: true,
      };
    }
    case FETCH_CART_SUCCESS: {
      return {
        ...state,
        requesting: false,
        data: payload,
      };
    }
    case FETCH_CART_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case UPDATE_CART_ITEM_REQUEST: {
      return {
        ...state,
        requesting: true,
        error: null,
        success: null,
      };
    }
    case UPDATE_CART_ITEM_SUCCESS: {
      console.log("data: ", state.data);
      const cart = _.map(state.data.cart, cartItem => {
        if (cartItem.product_id == payload.cart_item.product_id) {
          return {
            ...cartItem,
            qty: payload.cart_item.qty
          };
        }
        return cartItem;
      })
      return {
        ...state,
        requesting: false,
        success: payload.success,
        data: {
          cart: cart,
          sub_total: state.data.sub_total,
          discount: state.data.discount,
          shipping: state.data.shipping,
          total: state.data.total
        }
      };
    }
    case UPDATE_CART_ITEM_FAILED: {
      return {
        ...state,
        requesting: false,
        error: payload.error,
      };
    }
    case DELETE_CART_ITEM_REQUEST: {
      return {
        ...state,
        requesting: false,
        error: null,
        success: null,
      };
    }
    case DELETE_CART_ITEM_SUCCESS: {
      const cart = _.filter(state.data.cart, cartItem => cartItem.product_id != payload.cart_item.product_id);
      return {
        ...state,
        requesting: false,
        success: payload.success,
        data: {
          cart: cart,
          sub_total: state.data.sub_total,
          discount: state.data.discount,
          shipping: state.data.shipping,
          total: state.data.total
        }
      };
    }
    case DELETE_CART_ITEM_FAILED: {
      return {
        ...state,
        requesting: false,
      };
    }
    default: return state;
  }
}
