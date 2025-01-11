import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const registerUser = (data) => API.post('/users/register', data);
export const loginUser = (data) => API.post('/users/login', data);
export const fetchVideos = () => API.get('/videos');
export const uploadVideo = (data) => API.post('/videos', data);
