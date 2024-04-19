import axios, {AxiosRequestHeaders} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Resources} from '../../constants/resources.ts';

const api = axios.create({
  baseURL: Resources.API_URL_DEV,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer',
  },
});

api.interceptors.request.use(async config => {
  config.headers = config.headers ?? ({} as AxiosRequestHeaders);
  config.headers.Authorization = `Bearer ${await AsyncStorage.getItem(
    'token',
  )}`;
  return config;
});

export default api;
