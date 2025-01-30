import { NextApiRequest, NextApiResponse } from 'next';

const products = ['Product 1', 'Product 2', 'Product 3']; // Replace with your product data

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes((query as string).toLowerCase())
  );
  res.status(200).json(filteredProducts);
}