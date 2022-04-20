/* eslint-disable no-param-reassign */

// third-party libraries
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// config
import { BASE_URL } from 'app-config';

// services
import { getToken } from 'services/token';

// CREATE INSTANCE
const createInstance = (): AxiosInstance => {
  // create the instance
  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    baseURL: BASE_URL,
  });

  // add "request" interceptors
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    if (config.headers) {
      // add the "Authorization" header
      config.headers.authorization = `Bearer ${getToken()}`;
    }

    return config;
  });

  // return the created instance
  return instance;
};

export const axiosInstance = createInstance();
