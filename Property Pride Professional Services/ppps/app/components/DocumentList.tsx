import Link from 'next/link';
import React from 'react';

interface Document {
  title: string;
  path: string;
  description: string;
}

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <ul className="space-y-4">
      {documents.map((doc) => (
        <li key={doc.path} className="p-4 border rounded-lg hover:bg-gray-100 transition">
          <Link href={doc.path} className="text-blue-600 hover:underline">
            <h3 className="font-bold">{doc.title}</h3>
            <p className="text-gray-600">{doc.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DocumentList;