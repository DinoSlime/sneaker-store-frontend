import axiosClient from './axiosClient';

const authService = {
    login: (username, password) => {
        return axiosClient.post('/users/login', { username, password });
    },
    register: (data) => {
        return axiosClient.post('/users/register', data);
    },
    // Hàm lấy thông tin user hiện tại (nếu cần)
    getMe: () => {
        return axiosClient.get('/users/me');
    }
};

export default authService;