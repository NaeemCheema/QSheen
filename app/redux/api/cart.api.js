import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function addToCart(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.add_to_cart}`,
    data: params,
    method: 'POST',
  }).then(response => response.data);
}

export function fetchCart(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.get_cart}/${params.user_id}`,
    method: 'GET',
  }).then(response => response.data);
}

export function updateCartItem(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.update_cart_item}`,
    data: params,
    method: 'POST',
  }).then(response => response.data);
}

export function deleteCartItem(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.delete_cart_item}`,
    data: params,
    method: 'POST',
  }).then(response => response.data);
}
