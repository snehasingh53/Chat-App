import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    // For demo purposes, assume successful login
    if (credentials.email && credentials.password) {
      localStorage.setItem("user", JSON.stringify(credentials));
      navigate("/chat");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-8">Login</h1>
      <form onSubmit={handleSubmit} className="w-80 bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-800 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:bg-pink-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
