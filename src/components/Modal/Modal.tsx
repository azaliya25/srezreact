import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Оформить заказ</h2>
        <input type="text" placeholder="Имя" className="border p-2 mb-4 w-full rounded-md focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder="Телефон" className="border p-2 mb-4 w-full rounded-md focus:ring-2 focus:ring-blue-500" />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-4 text-gray-500 hover:text-gray-700">Закрыть</button>
          <button onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
