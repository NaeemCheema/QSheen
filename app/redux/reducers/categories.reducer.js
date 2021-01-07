import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILED,
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
      case FETCH_CATEGORIES_REQUEST: {
        return {
          ...state,
          requesting: true,
          error: null,
          success: null,
        };
      }
      case FETCH_CATEGORIES_SUCCESS: {
        return {
          requesting: false,
          data: payload.categories,
        };
      }
      case FETCH_CATEGORIES_FAILED: {
        return {
          requesting: false,
          error: payload.error,
          data: null,
        }
      }
      default: return state;
    }
  }
  