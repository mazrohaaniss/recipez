// components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between p-8 bg-blue-50 shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">RecipeZ</h1>
      
      {/* Navbar Links Wrapper */}
      <nav className="bg-white shadow-lg rounded-lg p-3 flex space-x-6">
        <Link
          to="/"
          className={`${
            location.pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600'
          } hover:text-blue-600`}
        >
          Home
        </Link>
        <Link
          to="/collection"
          className={`${
            location.pathname === '/collection' || location.pathname.includes('/detailcollection') 
              ? 'text-blue-600 font-semibold' 
              : 'text-gray-600'
          } hover:text-blue-600`}
        >
          Recipe Collection
        </Link>
        <Link
          to="/create"
          className={`${
            location.pathname === '/create' ? 'text-blue-600 font-semibold' : 'text-gray-600'
          } hover:text-blue-600`}
        >
          Create a Recipe
        </Link>
      </nav>
      
      <img
        src="https://d2ya09u1z2qlgr.cloudfront.net/public/storage/article/January2024/UHuCZO0kkNMCcLX1HrLu.jpg"
        alt="User profile"
        className="w-8 h-8 rounded-full"
      />
    </header>
  );
};

export default Navbar;
