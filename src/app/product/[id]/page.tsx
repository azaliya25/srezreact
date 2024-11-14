"use client";

// pages/product/[id].tsx
import React from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';

const ProductPage = () => {
    const params = useParams();
    const id = params?.id;

    // Проверка и преобразование id в число, если оно существует
    const product = products.find((p) => p.id === parseInt(id as string, 10));

    if (!product) {
        return <div className="container mx-auto p-4">Товар не найден.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center">
                <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-cover rounded-md mb-4 md:mb-0 md:mr-8" />

                <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">{product.name}</h2>
                    <p className="text-gray-500 text-lg mb-4">${product.price}</p>
                    <p className="text-gray-600 mb-4">Размер: {product.size}</p>
                    <p className="text-gray-700 mb-6">Категория: {product.category}</p>

                    <button
                        className={`w-full py-2 mb-2 rounded-md text-white ${product.stock > 0 ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 cursor-not-allowed'
                            } transition duration-200`}
                        disabled={product.stock === 0}
                    >
                        {product.stock > 0 ? 'Добавить в корзину' : 'Заказать'}
                    </button>

                    <p className="text-sm text-gray-500 mt-4">
                        {product.stock > 0 ? `В наличии: ${product.stock} шт.` : 'Нет в наличии'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
