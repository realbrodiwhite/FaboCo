import Link from 'next/link';
import React from 'react';

interface Document {
  title: string;
  path: string;
}

interface SidebarProps {
  documents: Document[];
}

const Sidebar: React.FC<SidebarProps> = ({ documents }) => {
  return (
    <nav className="w-1/4 bg-gray-200 p-4">
      <h2 className="font-bold">Documents</h2>
      <ul className="space-y-2">
        {documents.map((doc) => (
          <li key={doc.path}>
            <Link href={doc.path} className="text-blue-600 hover:underline">
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
