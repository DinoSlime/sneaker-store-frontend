import axiosClient from './axiosClient'; // Import file axios config của bạn

const orderService = {
    createOrder: (orderData) => {
        return axiosClient.post('/orders', orderData);
    },
    getOrdersByUser: (userId) => {
        return axiosClient.get(`/orders/user/${userId}`);
    },
    getOrderById: (orderId) => {
        return axiosClient.get(`/orders/${orderId}`);
    },
    getAllOrders: () => {
        return axiosClient.get('/orders/admin/get-all');
    },
    updateOrderStatus: (orderId, status) => {
        // Gọi PUT /api/orders/admin/update-status/1?status=SHIPPING
        return axiosClient.put(`/orders/admin/update-status/${orderId}`, null, {
            params: { status }
        });
    }
};

export default orderService;