import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    FETCH_CATEGORIES_REQUEST,
} from '../types';

import {
    fetchCategoriesActionsCreator,
  } from '../actions/categories.actions';

import { fetchCategories } from '../api';

function* fetchCategoriesSaga({ payload }) {
  try {
    const response = yield call(fetchCategories, payload);
    yield put(fetchCategoriesActionsCreator.fetchCategoriesSuccess(response));
  } catch(err) {
    const error = err || 'CATEGORIES CANNOT BE FIND';
    yield put(fetchCategoriesActionsCreator.fetchCategoriesFailed({error}));
  }
}

function* watchFetchCategories() {
  while(true) {
    const action = yield take(FETCH_CATEGORIES_REQUEST);
    yield *fetchCategoriesSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchFetchCategories),
  ]);
}
