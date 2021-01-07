import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function fetchDesigners() {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.designers}`,
  }).then(response => response.data);
}