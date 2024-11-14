export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    stock: number;
    category: string;
    size: string;
}

export const products: Product[] = [
    { id: 1, name: 'Classic Hoodie', image: '/hoodie1.jpg', price: 49.99, stock: 3, category: 'Classic', size: 'M' },
    { id: 2, name: 'Sport Hoodie', image: '/hoodie2.jpg', price: 59.99, stock: 0, category: 'Sport', size: 'L' },
    { id: 3, name: 'Classic Hoodie', image: '/hoodie1.jpg', price: 39.99, stock: 1, category: 'Classic', size: 'L' },
    { id: 4, name: 'Oversize Hoodie', image: '/hoodie2.jpg', price: 29.99, stock: 3, category: 'oversize', size: 'M' },
    { id: 5, name: 'Sport Hoodie', image: '/hoodie2.jpg', price: 69.99, stock: 1, category: 'hoodie', size: 'L' },
];
