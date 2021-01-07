import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function fetchCategories() {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.categories}`,
  }).then(response => response.data);
}