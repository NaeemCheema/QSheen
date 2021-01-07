import {createAction} from 'redux-actions';

import {
    ADD_TO_WISHLIST_REQUEST,
    ADD_TO_WISHLIST_SUCCESS,
    ADD_TO_WISHLIST_FAILED,
    FETCH_WISHLIST_REQUEST,
    FETCH_WISHLIST_SUCCESS,
    FETCH_WISHLIST_FAILED,
    DELETE_WISHLIST_ITEM_REQUEST,
    DELETE_WISHLIST_ITEM_SUCCESS,
    DELETE_WISHLIST_ITEM_FAILED,
} from '../types';

export const wishlistActionsCreator = {
    addToWishlistRequest: createAction(ADD_TO_WISHLIST_REQUEST),
    addToWishlistSuccess: createAction(ADD_TO_WISHLIST_SUCCESS),
    addToWishlistFailed: createAction(ADD_TO_WISHLIST_FAILED),
    fetchWishlistRequest: createAction(FETCH_WISHLIST_REQUEST),
    fetchWishlistSuccess: createAction(FETCH_WISHLIST_SUCCESS),
    fetchWishlistFaied: createAction(FETCH_WISHLIST_FAILED),
    deleteWishlistItemRequest: createAction(DELETE_WISHLIST_ITEM_REQUEST),
    deleteWishlistItemSuccess: createAction(DELETE_WISHLIST_ITEM_SUCCESS),
    deleteWishlistItemFailed: createAction(DELETE_WISHLIST_ITEM_FAILED),
};