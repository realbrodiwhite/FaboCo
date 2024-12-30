import React from 'react';
import Link from 'next/link';

interface Document {
    title: string;
    path: string;
}

interface SidebarProps {
    documents: Document[];
}

const Sidebar: React.FC<SidebarProps> = ({ documents }) => {
    return (
        <div className="w-64 bg-gray-800 text-white h-full p-4">
            <h2 className="text-lg font-bold mb-4">Documentation</h2>
            <ul>
                {documents.map((doc) => (
                    <li key={doc.path}>
                        <Link href={doc.path} className="hover:underline">{doc.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
