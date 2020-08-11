import axios from 'axios';

const API_URL = 'https://api.devrik.net';

export const TOKEN_KEY = 'devrik.TOKEN';

export const types = {
  PROJECT: 'projects',
  SKILL: 'skills',
};

export const auth = async (token) => {
  const response = await axios.post(`${API_URL}/auth`, { token });
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  return response.data;
};

export const login = async (username, password) => {
  const token = await axios.post(
    `${API_URL}/login`,
    { username, password },
    { responseType: 'text' }
  );
  axios.defaults.headers['Authorization'] = `Bearer ${token}`;
  return token.data;
};

export const getAll = async (type) => {
  const result = await axios.get(`${API_URL}/${type}`);
  return result.data;
};

export const getOne = async (type, id) => {
  const result = await axios.get(`${API_URL}/${type}/${id}`);
  return result.data;
};

export const deleteOne = async (type, id) => {
  const result = await axios.delete(`${API_URL}/${type}/${id}`);
  return result.data;
};

export const updateOne = async (type, id, data) => {
  const result = await axios.put(`${API_URL}/${type}/${id}`, data);
  return result.data;
};

export const postOne = async (type, data) => {
  const result = await axios.post(`${API_URL}/${type}`, data);
  return result.data;
};
