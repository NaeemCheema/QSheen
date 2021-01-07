import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    FETCH_BRANDS_REQUEST,
} from '../types';

import {
    fetchBrandsActionsCreator,
} from '../actions/brands.actions';

import { fetchBrands } from '../api';

function* fetchBrandsSaga({ payload }) {
  try {
    const response = yield call(fetchBrands, payload);
    console.log(response);
    yield put(fetchBrandsActionsCreator.fetchBrandsSuccess(response));
  } catch(err) {
    const error = err || 'BRANDS CANNOT BE FIND';
    yield put(fetchBrandsActionsCreator.fetchBrandsFailed({error}));
  }
}

function* watchFetchBrands() {
  while(true) {
    const action = yield take(FETCH_BRANDS_REQUEST);
    yield *fetchBrandsSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchFetchBrands),
  ]);
}
