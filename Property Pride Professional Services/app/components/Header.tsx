"use client";

import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="http://localhost:3001/3PS%20-%20Logo.png" alt="Company Logo" className="h-8 mr-2" />
        <h1 className="text-2xl font-bold">Documentation</h1>
      </div>
      <nav className="flex space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/getting-started" className="hover:underline">Getting Started</Link>
        <Link href="/api-reference" className="hover:underline">API Reference</Link>
      </nav>
    </header>
  );
};

export default Header;
