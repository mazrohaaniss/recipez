// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import RecipeCollection from './pages/recipecollection';

function App() {
  return (
    <Router>
      <div className="App bg-blue-50 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<RecipeCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
