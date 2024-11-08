export async function fetchProducts() {
    const response = await fetch('http://localhost:5050/products');
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  }
  