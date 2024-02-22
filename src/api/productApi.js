import { api } from './axios';
export const productApi = {
    getProducts: () => api.get('/products'),
};
