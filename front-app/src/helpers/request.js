// use axios to create a function for network requests
import axios from 'axios';
import { getCookie } from './cookie';

// save token to cookie/local storage

export const axiosPrivateRequests = axios.create({
    baseURL: process.env.API_PROXY_BASE_URL || 'http://localhost:5555',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${getCookie('token')}`,
    },
});


export const axiosPublicRequests = axios.create({
    baseURL: process.env.API_PROXY_BASE_URL || 'http://localhost:5555',
    timeout: 10000,
  })

// axios.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });
