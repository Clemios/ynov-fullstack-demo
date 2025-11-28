// use axios to create a function for network requests
import axios from 'axios';

// save token to cookie/local storage

export const request = axios.create({
    baseURL: process.env.API_PROXY_BASE_URL || 'http://localhost:5000',
    timeout: 10000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
});
