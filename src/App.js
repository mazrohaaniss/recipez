// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import RecipeCollection from './pages/recipecollection';
import DetailCollection from './pages/detailcollection';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CreateRecipe from './pages/CreateRecipe'; 
import './App.css';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <Router>
      <div className="App bg-blue-50 min-h-screen">
        {/* Pass isSignedIn to Navbar */}
        <Navbar isSignedIn={isSignedIn} />

        <Routes>
          <Route path="/" element={<Home isSignedIn={isSignedIn} />} />
          <Route path="/collection" element={<RecipeCollection />} />
          <Route path="/detailcollection/:id" element={<DetailCollection />} />
          <Route path="/signin" element={<SignIn onSignIn={handleSignIn} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create-recipe" element={<CreateRecipe />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
