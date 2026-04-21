import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000'
});

//get products
export const getProducts = () => API.get('/products');

//create order
export const createOrder = (data) => API.post('/orders', data);
