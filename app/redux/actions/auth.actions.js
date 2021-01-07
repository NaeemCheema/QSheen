import {createAction} from 'redux-actions';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,

  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
} from '../types';

export const authActionsCreator = {
  userLoginRequest: createAction(USER_LOGIN_REQUEST),
  userLoginSuccess: createAction(USER_LOGIN_SUCCESS),
  userLoginFailed: createAction(USER_LOGIN_FAILED),

  userSignupRequest: createAction(USER_SIGNUP_REQUEST),
  userSignupSuccess: createAction(USER_SIGNUP_SUCCESS),
  userSignupFailed: createAction(USER_SIGNUP_FAILED),
}
