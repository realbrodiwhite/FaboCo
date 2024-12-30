import React from 'react';
import Link from 'next/link';

const documents = [
    { title: 'API Documentation', path: '/documents/api-documentation' },
    { title: 'Automation Strategy', path: '/documents/automation-strategy' },
    { title: 'Budget Planning Guide', path: '/documents/budget-planning-guide' },
    { title: 'Business Continuity Plan', path: '/documents/business-continuity-plan' },
    { title: 'Capability Development Frameworks', path: '/documents/capability-development-frameworks' },
];

const Sidebar = () => {
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