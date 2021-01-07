import {createAction} from 'redux-actions';
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAILED
} from '../types';

export const profileActionsCreator = {
  userProfileRequest: createAction(USER_PROFILE_REQUEST),
  userProfileSuccess: createAction(USER_PROFILE_SUCCESS),
  userProfileFailed: createAction(USER_PROFILE_FAILED),
}
