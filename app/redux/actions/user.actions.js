import {createAction} from 'redux-actions';
import {
  ADD_MEASUREMENTS_REQUEST,
  ADD_MEASUREMENTS_SUCCESS,
  ADD_MEASUREMENTS_FAILED,
} from '../types';

export const userActionsCreator = {
  addMeasermentsRequest: createAction(ADD_MEASUREMENTS_REQUEST),
  addMeasermentsSuccess: createAction(ADD_MEASUREMENTS_SUCCESS),
  addMeasermentsFailed: createAction(ADD_MEASUREMENTS_FAILED),
};
