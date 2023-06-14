import axios from 'axios';
import { ErrorPop } from '../utils/error.component.js';

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error
    switch (error.response.status) {
        case 401:
          return <ErrorPop error={error} />
          //window.location.href = '/error';
          break;
        case 404:
        case 500:
          alert(error.message);
          window.location.href = '/login';
          break;
        default:
          return Promise.reject(error);
    }
  }
);

export default instance;
