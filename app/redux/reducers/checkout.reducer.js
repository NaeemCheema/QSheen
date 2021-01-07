import {
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILED,
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
      case CHECKOUT_REQUEST: {
        return {
          ...state,
          requesting: true,
          error: null,
          success: null,
        };
      }
      case CHECKOUT_SUCCESS: {
        return {
          requesting: false,
          data: payload,
        };
      }
      case CHECKOUT_FAILED: {
        return {
          requesting: false,
          error: payload.error,
          data: null,
        }
      }
      default: return state;
    }
  }
  