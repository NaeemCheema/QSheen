import {createAction} from 'redux-actions';
import {
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILED,
} from '../types';

export const fetchCategoriesActionsCreator = {
    fetchCategoriesRequest: createAction(FETCH_CATEGORIES_REQUEST),
    fetchCategoriesSuccess: createAction(FETCH_CATEGORIES_SUCCESS),
    fetchCategoriesFailed: createAction(FETCH_CATEGORIES_FAILED),
}