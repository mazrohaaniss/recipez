// src/pages/SignIn.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onSignIn }) => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    onSignIn(); // Update sign-in state
    navigate('/'); // Redirect to Home
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Sign In</h2>
      <button
        onClick={handleSignInClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
