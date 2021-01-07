import { SERVER_URL, END_POINTS } from '../../config';
import { API } from '../../helpers';

export function addMeasurements(params) {
  return API.fetch({
    method: 'POST',
    url: `${SERVER_URL}${END_POINTS.save_measurements}`,
    data: params,
  }).then(response => response.data);
}

export function updateMeasurements(params) {
  return API.fetch({
    method: 'POST',
    url: `${SERVER_URL}${END_POINTS.update_measurements}`,
    data: params,
  }).then(response => response.data);
}
