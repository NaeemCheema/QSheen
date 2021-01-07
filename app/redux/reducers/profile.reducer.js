import {
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAILED

  } from '../types';
  
  const initialState = {
    requesting: false,
    error: null,
    success: null,
    data: null,
  };
  
  export default function (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
      case USER_PROFILE_REQUEST: {
        return {
          ...state,
          requesting: true,
          error: null,
          success: null,
        };
      }
      case USER_PROFILE_SUCCESS: {
        return {
          requesting: false,
          data: payload.user,
        };
      }
      case USER_PROFILE_FAILED: {
        return {
          requesting: false,
          error: payload.error,
        }
      }
      default: return state;
    }
  }
  