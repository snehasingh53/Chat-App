import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
  const [nickname, setNickname] = useState("");
  const [form, setForm] = useState({
    email: "",
    phone: "",
    role: "Student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600 p-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Welcome to Sneha's Chat App
      </h1>
      <form onSubmit={handleSubmit} className="w-80 bg-white p-6 rounded-lg shadow-lg">
        {/* Form Fields */}
        <div className="mb-4">
          <input
            type="text"
            name="nickname"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            onChange={(e) => setNickname(e.target.value)}
            value={nickname}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Institute">Institute</option>
          </select>
        </div>
        <div className="flex flex-col items-center">
          <Link
            to={`/chat?name=${nickname}`}
            className={`bg-red-800 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:bg-pink-700 ${
              !nickname ? "pointer-events-none opacity-50" : ""
            }`}
          >
            Register
          </Link>
          <Link
            to="/login"
            className="mt-4 text-blue-500 underline"
          >
            Already a user? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Join;
