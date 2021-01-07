import {
  ADD_MEASUREMENTS_REQUEST,
  ADD_MEASUREMENTS_SUCCESS,
  ADD_MEASUREMENTS_FAILED,
} from '../types';

const initial_state = {
  requesting: false,
  success: null,
  error: null,

  measurements: null,
};

export default function (state = initial_state, action) {
  const { payload, type } = action;
  switch(type) {
    case ADD_MEASUREMENTS_REQUEST: {
      return {
        ...state,
        requesting: true,
        success: null,
        error: null,
      };
    }
    case ADD_MEASUREMENTS_SUCCESS: {
      return {
        ...state,
        measurements: payload.measurements,
        requesting: false,
        success: payload.success,
      };
    }
    case ADD_MEASUREMENTS_FAILED: {
      return {
        ...state,
        requesting: false,
        error: 'Measuremnts Cannot be saved',
      };
    }
    default: return state;
  }
}
