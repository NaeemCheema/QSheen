import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function addToWishlist(params) {
  console.log("params: ", params);
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.add_to_wishlist}`,
    data: params,
    method: 'POST',
  }).then(response => response.data);
}

export function fetchWishlist(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.get_wishlist}/${params.user_id}`,
    method: 'GET',
  }).then(response => response.data);
}

export function deleteWishlistItem(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.delete_wishlist_item}`,
    data: params,
    method: 'POST',
  }).then(response => response.data);
}
