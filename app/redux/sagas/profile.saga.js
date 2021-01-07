import { take, put, call, fork, all } from 'redux-saga/effects';
import {
    USER_PROFILE_REQUEST,
} from '../types';
import {
    profileActionsCreator,
} from '../actions';
import { profile } from '../api';

function* profileSaga({ payload }) {
  try {
    const response = yield call(profile, payload);
    console.log("response for profile: ", response);
    if (response.code === 200) {
      const user = {
        ...response.user_detail,
      };
      yield put(profileActionsCreator.userProfileSuccess({ user }));
    }else{
      yield put(profileActionsCreator.userProfileFailed({ error: response.message }));
    }
  } catch(err) {
    yield put(profileActionsCreator.userProfileFailed({ error: err? err : 'User Profile Failed!' }));
  }
}

function* watchProfile() {
  while(true) {
    const action = yield take(USER_PROFILE_REQUEST);
    yield *profileSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchProfile)
  ]);
}
