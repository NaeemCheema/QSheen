import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    ADD_TO_WISHLIST_REQUEST,
    FETCH_WISHLIST_REQUEST,
    DELETE_WISHLIST_ITEM_REQUEST,
} from '../types';
import {
    wishlistActionsCreator,
} from '../actions';
import { addToWishlist, fetchWishlist, deleteWishlistItem } from '../api';

function* addToWishListSaga({payload}) {
  try {
    console.log("saga called");
    const response = yield call(addToWishlist, payload);
    console.log("response wishlist: ", response);
    if(response.code === 200){
      const wishlist_item = {
        ...response.order_id,
      };
      yield put(wishlistActionsCreator.addToWishlistSuccess({wishlist_item, success: response.order_inserted}));
    }else{
      error = 'Item cannot be added to wishlist.'
      yield put(wishlistActionsCreator.addToWishlistFailed({error}));
    }
  } catch (error) {
    error = 'Item cannot be added to wishlist.'
    yield put(wishlistActionsCreator.addToWishlistFailed({error}));
  }
}

function* fetchWishlistSaga({payload}) {
  try {
    const response = yield call(fetchWishlist, payload);
    if(response.code === 200){
      yield put(wishlistActionsCreator.fetchWishlistSuccess({
        cart: response.items,
      }));
    }
  } catch (error) {
    yield put(wishlistActionsCreator.fetchWishlistFaied({error: 'No items found in wishlist.'}));
  }
}

function* deleteWishlistItemSaga({payload}) {
  try {
    const response = yield call(deleteWishlistItem, payload);
    if(response.code === 200){
      const wishlist_item = {
        product_id: payload.product_id
      };
      yield put(wishlistActionsCreator.deleteWishlistItemSuccess({wishlist_item, success: response.message}));
    }else{
      yield put(wishlistActionsCreator.deleteWishlistItemFailed({error: 'Product Cannot be deleted.'}));
    }
  } catch (error) {
    console.log(error);
    yield put(wishlistActionsCreator.deleteWishlistItemFailed({error: 'Product Cannot be deleted.'}));
  }
}

function* watchAddToWishlist() {
  while(true) {
    const action = yield take(ADD_TO_WISHLIST_REQUEST);
    yield *addToWishListSaga(action);
  }
}

function* watchFetchWishlist() {
  while(true) {
    const action = yield take(FETCH_WISHLIST_REQUEST);
    yield *fetchWishlistSaga(action);
  }
}

function* watchDeleteWishlistItem() {
  while(true) {
    const action = yield take(DELETE_WISHLIST_ITEM_REQUEST);
    yield *deleteWishlistItemSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchAddToWishlist),
    fork(watchFetchWishlist),
    fork(watchDeleteWishlistItem),
  ]);
}
