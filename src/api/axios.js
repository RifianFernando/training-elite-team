import axios from 'axios';

// dapetin token sendiri dapetin dari cookies

export const api = axios.create({
    baseURL: 'https://fakestoreapi.com',
});
