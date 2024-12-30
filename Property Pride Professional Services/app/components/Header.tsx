"use client";

import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Documentation Website</h1>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search documents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded-l-md border border-gray-300"
        />
        <button type="submit" className="bg-blue-600 p-2 rounded-r-md text-white hover:bg-blue-700 transition">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;