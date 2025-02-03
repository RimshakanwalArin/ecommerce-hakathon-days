// Update the Product type to match the actual data structure
export interface Product {
    id: number; // Change from string to number
    title: string;
    image: string[];
    slug: string;
    price: number;
    category: string;
    description: string;
    size: string[];
    color: string[];
    qty: number;
    discount: number;
  }