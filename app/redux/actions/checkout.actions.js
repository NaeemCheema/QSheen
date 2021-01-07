import {createAction} from 'redux-actions';
import {
    CHECKOUT_REQUEST,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILED,
} from '../types';

export const fetchCheckoutActionsCreator = {
    fetchCheckoutRequest: createAction(CHECKOUT_REQUEST),
    fetchCheckoutSuccess: createAction(CHECKOUT_SUCCESS),
    fetchCheckoutFailed: createAction(CHECKOUT_FAILED),
}