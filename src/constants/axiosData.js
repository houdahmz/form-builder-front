import axios from 'axios';
import { baseUrl } from './baseUrl';

const dataAxios = axios.create({
  baseURL: baseUrl , //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
dataAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.toString());
    // const { status } = error.response;
    // if (status === UNAUTHORIZED) {
    //     dispatch(logout());
    // }
    return Promise.reject(error);
  }
);

export default dataAxios;
