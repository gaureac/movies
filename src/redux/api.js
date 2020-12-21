import axios from 'axios';
import { baseURL, api_key } from '../config';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default api;
