import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    CHECKOUT_REQUEST,
} from '../types';

import {
    fetchCheckoutActionsCreator,
  } from '../actions/checkout.actions';

import { fetchCheckout } from '../api';

function* fetchCheckoutSaga({ payload }) {
  try {
    const response = yield call(fetchCheckout, payload);
    console.log("response: ", response);
    if(response.code === 200){
        yield put(fetchCheckoutActionsCreator.fetchCheckoutSuccess(response));
    }
  } catch(err) {
    const error = err || 'Checkout failed';
    yield put(fetchCheckoutActionsCreator.fetchCheckoutFailed({error}));
  }
}

function* watchFetchCheckout() {
  while(true) {
    const action = yield take(CHECKOUT_REQUEST);
    yield *fetchCheckoutSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchFetchCheckout),
  ]);
}
