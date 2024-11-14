// src/pages/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example of sign-in logic (replace with real logic)
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      onSignIn(); // Notify parent component that the user has signed in
      navigate('/'); // Redirect to home page after sign-in
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
