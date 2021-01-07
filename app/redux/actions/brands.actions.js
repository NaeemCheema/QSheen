import {createAction} from 'redux-actions';
import {
    FETCH_BRANDS_REQUEST,
    FETCH_BRANDS_SUCCESS,
    FETCH_BRANDS_FAILED,
} from '../types';

export const fetchBrandsActionsCreator = {
    fetchBrandsRequest: createAction(FETCH_BRANDS_REQUEST),
    fetchBrandsSuccess: createAction(FETCH_BRANDS_SUCCESS),
    fetchBrandsFailed: createAction(FETCH_BRANDS_FAILED),
}