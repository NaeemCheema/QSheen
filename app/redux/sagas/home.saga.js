import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    FETCH_HOME_REQUEST,
} from '../types';

import {
    fetchHomeActionsCreator,
} from '../actions/home.actions';

import { fetchHome } from '../api';

function* fetchHomeSaga({ payload }) {
  try {
    const response = yield call(fetchHome, payload);
    yield put(fetchHomeActionsCreator.fetchHomeSuccess(response));
  } catch(err) {
    const error = err || 'HOME CANNOT BE FIND';
    yield put(fetchHomeActionsCreator.fetchHomeFailed({error}));
  }
}

function* watchFetchHome() {
  while(true) {
    const action = yield take(FETCH_HOME_REQUEST);
    yield *fetchHomeSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchFetchHome),
  ]);
}
