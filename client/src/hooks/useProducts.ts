import { useState, useEffect } from 'react';
import { fetchProducts } from '../lib/api';
import { Product } from '../types/Product';

// When page is loaded, sets products to whatever is fetched from the API
export function useProducts() {
  const [products, setProducts] = useState<Product [] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err as Error);
      }
    }
    loadProducts();
  }, []);

  return { products, error };
}
