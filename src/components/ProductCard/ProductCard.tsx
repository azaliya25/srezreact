"use client";
import React from 'react';
import { Product } from '../../data/products';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  onOrderClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrderClick }) => {
  const router = useParams();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition transform hover:scale-105 hover:shadow-xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg text-gray-500 font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-700 text-sm mb-1">${product.price}</p>
      <p className="text-sm text-gray-500 mb-3">Size: {product.size}</p>

      <Link
        href={(`/product/${product.id}`)}
        className="w-full py-2 mt-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition duration-200"
      >
        Подробнее
      </Link>

      <button
        onClick={onOrderClick}
        className={`w-full py-2 mt-2 rounded-md text-white ${product.stock > 0 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 cursor-not-allowed'
          } transition duration-200`}
        disabled={product.stock === 0}
      >
        {product.stock > 0 ? 'В корзину' : 'Заказать'}
      </button>
    </div>
  );
};

export default ProductCard;
