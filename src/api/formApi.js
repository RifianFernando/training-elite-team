import { api } from './axios';

export const FormApi = {
    async postContactForm(data) {
        try {
            const response = await api.post('/contact', data);
        } catch (err) {
            console.log(err);
        }
    },
};
