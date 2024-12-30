import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div>
        © 2023 3PS Incorporated. All rights reserved.
      </div>
      <div className="mt-2">
        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link> | 
        <Link href="/terms-of-service" className="hover:underline"> Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;
