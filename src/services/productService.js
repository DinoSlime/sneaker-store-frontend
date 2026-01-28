import axiosClient from './axiosClient';

const productService = {
    // Lấy danh sách (Có phân trang)
    getAll: (params) => {
        return axiosClient.get('/products', { params });
    },
    

    // Lấy chi tiết 1 sản phẩm (Để sửa)
    getById: (id) => {
        return axiosClient.get(`/products/${id}`);
    },

    // Thêm mới
    create: (data) => {
        return axiosClient.post('/products', data); 
    },

    // Cập nhật
    update: (id, data) => {
        return axiosClient.put(`/products/${id}`, data);
    },

    // Xóa sản phẩm
    delete: (id) => {
        return axiosClient.delete(`/products/${id}`);
    }
    
};

export default productService;