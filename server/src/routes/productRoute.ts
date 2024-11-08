import express from 'express';
import { getProducts } from '../controllers/getProducts';

const productRoute = express.Router();

productRoute.get('/', getProducts);

export { productRoute };