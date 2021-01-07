import {createAction} from 'redux-actions';
import {RESET_MESSAGES} from '../types';

export const appActionsCreator = {
  resetMessages: createAction(RESET_MESSAGES),
};
