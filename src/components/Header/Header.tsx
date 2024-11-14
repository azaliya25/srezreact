import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer hover:text-blue-400">
          Hoodie Store
        </h1>
      </div>
    </header>
  );
};

export default Header;
