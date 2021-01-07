import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  ADD_TO_CART_REQUEST,
  FETCH_CART_REQUEST,
  UPDATE_CART_ITEM_REQUEST,
  DELETE_CART_ITEM_REQUEST,
} from '../types';
import {
  cartActionsCreator,
} from '../actions';
import { addToCart, fetchCart, updateCartItem, deleteCartItem } from '../api';

function* addToCartSaga({payload}) {
  try {
    const response = yield call(addToCart, payload);
    if(response.code === 200){
      const cart_item = {
        ...response.order_id,
      };
      yield put(cartActionsCreator.addToCartSuccess({cart_item, success: response.order_inserted}));
    }else{
      error = 'Item cannot be added to cart.'
      yield put(cartActionsCreator.addToCartFailed({error}));
    }
  } catch (error) {
    error = 'Item cannot be added to cart.'
    yield put(cartActionsCreator.addToCartFailed({error}));
  }
}

function* fetchCartSaga({payload}) {
  try {
    const response = yield call(fetchCart, payload);
    if(response.code === 200){
      yield put(cartActionsCreator.fetchCartSuccess({
        cart: response.items, 
        sub_total: response.sub_total, 
        discount: response.discount, 
        shipping: response.shipping, 
        total: response.total
      }));
    }
  } catch (error) {
    console.log(error);
    yield put(cartActionsCreator.fetchCartFaied({error: 'No items found in cart.'}));
  }
}

function* updateCartItemSaga({payload}) {
  try {
    const response = yield call(updateCartItem, payload);
    if(response.code === 200){
      console.log("payload: ", payload);
      const cart_item = {
        product_id: payload.product_id,
        qty: payload.qty,
      };
      yield put(cartActionsCreator.updateCartItemSuccess({cart_item, success: response.order_inserted}));
    }else{
      yield put(cartActionsCreator.updateCartItemFailed({error: 'Product cannot be updated.'}));
    }
  } catch (error) {
    console.log(error);
    yield put(cartActionsCreator.updateCartItemFailed({error: 'Product cannot be updated.'}));
  }
}

function* deleteCartItemSaga({payload}) {
  try {
    const response = yield call(deleteCartItem, payload);
    if(response.code === 200){
      const cart_item = {
        product_id: payload.product_id
      };
      yield put(cartActionsCreator.deleteCartItemSuccess({cart_item, success: response.message}));
    }else{
      yield put(cartActionsCreator.updateCartItemFailed({error: 'Product Cannot be deleted.'}));
    }
  } catch (error) {
    console.log(error);
    yield put(cartActionsCreator.updateCartItemFailed({error: 'Product Cannot be deleted.'}));
  }
}

function* watchAddToCart() {
  while(true) {
    const action = yield take(ADD_TO_CART_REQUEST);
    yield *addToCartSaga(action);
  }
}

function* watchFetchCart() {
  while(true) {
    const action = yield take(FETCH_CART_REQUEST);
    yield *fetchCartSaga(action);
  }
}

function* watchUpdateCartItem() {
  while(true) {
    const action = yield take(UPDATE_CART_ITEM_REQUEST);
    yield *updateCartItemSaga(action);
  }
}

function* watchDeleteCartItem() {
  while(true) {
    const action = yield take(DELETE_CART_ITEM_REQUEST);
    yield *deleteCartItemSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchAddToCart),
    fork(watchFetchCart),
    fork(watchUpdateCartItem),
    fork(watchDeleteCartItem),
  ]);
}
