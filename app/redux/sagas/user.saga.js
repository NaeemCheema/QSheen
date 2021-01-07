import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  ADD_MEASUREMENTS_REQUEST,
} from '../types';

import {
  userActionsCreator
} from '../actions';

import { addMeasurements } from '../api';

function* addMeasurementsSaga({ payload }) {
  try {
    const response = yield call(addMeasurements, payload);
    yield put(userActionsCreator.addMeasermentsSuccess({ measurements: response.user_measurment, success: response.messages }));
  } catch(err) {
    const error = err || 'Measurements cannot be saved';
    yield put(userActionsCreator.addMeasermentsFailed({error}));
  }
}

function* watchAddMeasurements() {
  while(true) {
    const action = yield take(ADD_MEASUREMENTS_REQUEST);
    yield *addMeasurementsSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchAddMeasurements),
  ]);
}
