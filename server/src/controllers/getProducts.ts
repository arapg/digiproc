import { Request, Response } from 'express';
import products from '../products.json';

function getProducts(req: Request, res: Response): void {
  res.json(products);
}

export { getProducts };
