import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './globals.css';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-4 bg-gray-100">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}