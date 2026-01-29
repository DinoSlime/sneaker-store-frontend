import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://sneaker-store-backend-4thr.onrender.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosClient;