import {createAction} from 'redux-actions';
import {
    FETCH_DESIGNERS_REQUEST,
    FETCH_DESIGNERS_SUCCESS,
    FETCH_DESIGNERS_FAILED,
} from '../types';

export const designersActionsCreator = {
    fetchDesignersRequest: createAction(FETCH_DESIGNERS_REQUEST),
    fetchDesignersSuccess: createAction(FETCH_DESIGNERS_SUCCESS),
    fetchDesignersFailed: createAction(FETCH_DESIGNERS_FAILED),
}