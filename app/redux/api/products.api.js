import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function fetchProductsByCategories(params) {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.products_by_categories}/${params.id}`,
  }).then(response => response.data);
}

export function fetchProductDetails(params) {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.product_details}/${params.product_id}`,
  }).then(response => response.data);
}