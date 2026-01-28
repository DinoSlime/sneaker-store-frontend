import axiosClient from './axiosClient';

const paymentService = {
    createVietQR: (orderData) => {
        return axiosClient.post('/payment/vietqr', orderData);
    }
};

export default paymentService;