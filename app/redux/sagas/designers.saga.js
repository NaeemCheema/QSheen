import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    FETCH_DESIGNERS_REQUEST,
} from '../types';

import {
  designersActionsCreator,
} from '../actions/designers.actions';

import { fetchDesigners } from '../api';

function* fetchDesignersSaga({ payload }) {
  try {
    const response = yield call(fetchDesigners, payload);
    console.log(response);
    yield put(designersActionsCreator.fetchDesignersSuccess(response));
  } catch(err) {
    const error = err || 'DESIGNERS CANNOT BE FIND';
    yield put(designersActionsCreator.fetchDesignersFailed({error}));
  }
}

function* watchFetchDesigners() {
  while(true) {
    const action = yield take(FETCH_DESIGNERS_REQUEST);
    yield *fetchDesignersSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchFetchDesigners),
  ]);
}
