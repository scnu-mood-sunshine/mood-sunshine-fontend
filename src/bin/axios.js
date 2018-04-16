import axios from 'axios';

axios.interceptors.request.use(function (config) {
  config.baseURL = 'http://192.168.1.5:8424';
    return config;
  }, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
});

export default axios;