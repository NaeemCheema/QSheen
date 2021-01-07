import {createAction} from 'redux-actions';
import {
    FETCH_HOME_REQUEST,
    FETCH_HOME_SUCCESS,
    FETCH_HOME_FAILED,
} from '../types';

export const fetchHomeActionsCreator = {
    fetchHomeRequest: createAction(FETCH_HOME_REQUEST),
    fetchHomeSuccess: createAction(FETCH_HOME_SUCCESS),
    fetchHomeFailed: createAction(FETCH_HOME_FAILED),
}