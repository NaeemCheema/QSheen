import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function fetchHome() {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.home}`,
  }).then(response => response.data);
}