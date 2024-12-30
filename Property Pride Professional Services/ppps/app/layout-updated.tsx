import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './globals.css';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-6 bg-white shadow-md rounded-lg">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
