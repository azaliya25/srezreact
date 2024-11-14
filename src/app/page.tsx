"use client";
import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import ProductCard from '@/components/ProductCard/ProductCard';
import Modal from '@/components/Modal/Modal';
import { products } from '../data/products';

const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsModalOpen(true); // Открываем модальное окно при клике на "Заказать"
  };

  const closeModal = () => {
    setIsModalOpen(false); // Закрываем модальное окно
  };

  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? product.category === selectedCategory : true)
    )
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <>
      <Header />
      <HeroSlider images={images} />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded-md w-1/3 text-gray-500 focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            className="border p-2 rounded-md text-gray-500"
          >
            <option value="asc" className='text-gray-500'>Цена: по возрастанию</option>
            <option value="desc" className='text-gray-500'>Цена: по убыванию</option>
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded-md text-gray-500"
          >
            <option value="">Все категории</option>
            <option value="hoodie">С капюшоном</option>
            <option value="oversize">Оверсайз</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOrderClick={handleOrderClick} // Открываем модальное окно при заказе
            />
          ))}
        </div>
      </div>

      {/* Модальное окно для заказа */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Home;
