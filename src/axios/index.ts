import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

// Interceptors
instance.interceptors.request.use(config => {
  document.body.classList.add('loading-indicator');
  return config;

}, function (error) {
  document.body.classList.remove('loading-indicator');
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {

  document.body.classList.remove('loading-indicator');

  return response;
}, function (error: AxiosResponse) {
  document.body.classList.remove('loading-indicator');
  console.log(error.data)
  return Promise.reject(error);
});

export default instance;