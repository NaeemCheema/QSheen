import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function profile(params) {
  return API.fetch({
    method: 'GET',
    url: `${SERVER_URL}${END_POINTS.profile}/${params.id}`,
  }).then(response => response.data);
}