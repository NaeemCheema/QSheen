import {
    FETCH_BRANDS_REQUEST,
    FETCH_BRANDS_SUCCESS,
    FETCH_BRANDS_FAILED,
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
      case FETCH_BRANDS_REQUEST: {
        return {
          ...state,
          requesting: true,
          error: null,
          success: null,
        };
      }
      case FETCH_BRANDS_SUCCESS: {
        return {
          requesting: false,
          data: payload.brands,
        };
      }
      case FETCH_BRANDS_FAILED: {
        return {
          requesting: false,
          error: payload.error,
          data: null,
        }
      }
      default: return state;
    }
}
  