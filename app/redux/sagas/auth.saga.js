import { take, put, call, fork, all } from 'redux-saga/effects';
import {
  USER_LOGIN_REQUEST,
  USER_SIGNUP_REQUEST,
} from '../types';
import {
  authActionsCreator,
} from '../actions';
import { login, signUp } from '../api';
import AsyncStorage from '@react-native-community/async-storage';

function* loginSaga({ payload }) {
  try {
    const params = {
      "username": payload.username,
      "password": payload.password
    };
    const response = yield call(login, params);
    console.log("rememberMe: ", payload.rememberMe);

    if (response.code === 200) {
      const user = {
        ...response.user.data,
        token: response.user.data,
      };
      if(payload.rememberMe==true){
        AsyncStorage.setItem("user_id",user.ID.toString());
        console.log("response for login: ", user);
      }
      
      yield put(authActionsCreator.userLoginSuccess({ user }));
    }else{
      yield put(authActionsCreator.userLoginFailed({ error: response.message }));
    }
  } catch(err) {
    yield put(authActionsCreator.userLoginFailed({ error: err? err : 'User Login Failed!' }));
  }
}

function* signupSaga({ payload }) {
  try {
    const response = yield call(signUp, payload);
    if (response.code === 200) {
      const user = {
        ...response.user,
        token: response.user,
      };
      yield put(authActionsCreator.userSignupSuccess({ user }));
    }else{
      yield put(authActionsCreator.userSignupFailed({ error: response.message }));
    }
  } catch(error) {
    yield put(authActionsCreator.userSignupFailed({ error: error? error : 'User Signup Failed' }));
  }
}

function* watchLogin() {
  while(true) {
    const action = yield take(USER_LOGIN_REQUEST);
    yield *loginSaga(action);
  }
}

function* watchSignup() {
  while(true) {
    const action = yield take(USER_SIGNUP_REQUEST);
    yield *signupSaga(action);
  }
}

export default function* () {
  yield all([
    fork(watchLogin),
    fork(watchSignup),
  ]);
}
