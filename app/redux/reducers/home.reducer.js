import {
    FETCH_HOME_REQUEST,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILED,
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
        case FETCH_HOME_REQUEST: {
            return {
                ...state,
                requesting: true,
                error: null,
                success: null,
            };
        }
        case FETCH_HOME_SUCCESS: {
            return {
                requesting: false,
                data: payload.home,
            };
        }
        case FETCH_HOME_FAILED: {
            return {
                requesting: false,
                error: payload.error,
                data: null,
            }
        }
        default: return state;
    }
}
  