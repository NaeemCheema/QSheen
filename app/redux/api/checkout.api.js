import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function fetchCheckout(params) {
  return API.fetch({
    url: `${SERVER_URL}${END_POINTS.checkout}`,
    data: params,
    method: 'POST',
  }).then(response => response.data);
}