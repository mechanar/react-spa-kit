import axios from 'axios';

export const BASE_URL = process.env.NODE_ENV === 'development' ? '/api' : '/api';
// export const API_BASE = `${BASE_URL}api/v1/insurance/`;

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const get = async (url, params) => {
  try {
    const res = await http.get(url, params);
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const post = async (url, payload) => {
  try {
    const res = await http.post(url, payload);
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const put = async (url, payload) => {
  try {
    const res = await http.put(url, payload);
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const destroy = async url => {
  try {
    const res = await http.delete(url);
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};
export default http;
