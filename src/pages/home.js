// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Welcome to RecipeZ!</h1>
      <Link to="/collection">
        <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go to Recipe Collection
        </button>
      </Link>
    </div>
  );
}

export default Home;
