import {
    FETCH_DESIGNERS_REQUEST,
    FETCH_DESIGNERS_SUCCESS,
    FETCH_DESIGNERS_FAILED,
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
      case FETCH_DESIGNERS_REQUEST: {
        return {
          ...state,
          requesting: true,
          error: null,
          success: null,
        };
      }
      case FETCH_DESIGNERS_SUCCESS: {
        return {
          requesting: false,
          data: payload.designers,
        };
      }
      case FETCH_DESIGNERS_FAILED: {
        return {
          requesting: false,
          error: payload.error,
          data: null,
        }
      }
      default: return state;
    }
  }
  