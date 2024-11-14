// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import RecipeCollection from './pages/recipecollection';
import DetailCollection from './pages/detailcollection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App bg-blue-50 min-h-screen">
        <Navbar /> {/* Tambahkan Navbar di sini agar tampil di semua halaman */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<RecipeCollection />} />
          <Route path="/detailcollection/:id" element={<DetailCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
