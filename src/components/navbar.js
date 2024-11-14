import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isSignedIn }) => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between p-8 bg-blue-50 shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">RecipeZ</h1>

      {/* Centered Navbar Links for signed-in users */}
      {isSignedIn ? (
        <nav className="flex space-x-6 justify-center w-full">
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
      ) : (
        <nav className="space-x-4">
          <Link to="/signin">
            <button className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </nav>
      )}

      {/* Profile Icon after Sign In */}
      {isSignedIn && (
        <div className="flex items-center space-x-4">
          <Link to="/profile">
            <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full cursor-pointer">
              <span className="text-sm font-semibold"> L</span> {/* Placeholder for profile */}
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
