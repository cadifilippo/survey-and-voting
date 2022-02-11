import { API_URL } from '../config';

export const fetchRequest = (url, options) => {
  return fetch(`${API_URL}${url}`, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
