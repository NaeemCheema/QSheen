import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function fetchBrands() {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.brands}`,
  }).then(response => response.data);
}