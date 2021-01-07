import {createAction} from 'redux-actions';

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

export const cartActionsCreator = {
  addToCartRequest: createAction(ADD_TO_CART_REQUEST),
  addToCartSuccess: createAction(ADD_TO_CART_SUCCESS),
  addToCartFailed: createAction(ADD_TO_CART_FAILED),
  fetchCartRequest: createAction(FETCH_CART_REQUEST),
  fetchCartSuccess: createAction(FETCH_CART_SUCCESS),
  fetchCartFaied: createAction(FETCH_CART_FAILED),
  updateCartItemRequest: createAction(UPDATE_CART_ITEM_REQUEST),
  updateCartItemSuccess: createAction(UPDATE_CART_ITEM_SUCCESS),
  updateCartItemFailed: createAction(UPDATE_CART_ITEM_FAILED),
  deleteCartItemRequest: createAction(DELETE_CART_ITEM_REQUEST),
  deleteCartItemSuccess: createAction(DELETE_CART_ITEM_SUCCESS),
  deleteCartItemFailed: createAction(DELETE_CART_ITEM_FAILED),
};
