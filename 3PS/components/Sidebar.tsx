import React from 'react';
import { Document, DocumentDetails } from './types';

interface SidebarProps {
  documents: Record<string, DocumentDetails>;
  selectedDoc: Document | null;
  onSelect: (docName: string | null, details?: DocumentDetails) => void;
  filteredDocuments: Record<string, DocumentDetails>;
  isDarkMode?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  documents,
  selectedDoc,
  onSelect,
  filteredDocuments,
  isDarkMode = false,
}) => {
  // Quick access documents
  const quickLinks = {
    'Executive Summary': 'Executive Summary.md',
    'Service Catalog': 'Service Catalog.md',
    'Training Manual': 'Training Manual.md',
    'API Documentation': 'API Documentation.md',
    'Client Onboarding Guide': 'Client Onboarding Guide.md',
    'Standard Operating Procedures Manual': 'Standard Operating Procedures Manual.md',
  };

  const handleQuickLinkClick = (docName: string) => {
    const doc = documents[docName.replace('.md', '')];
    if (doc) {
      onSelect(doc.name, doc);
    }
  };

  return (
    <aside 
      className={`w-80 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r overflow-y-auto flex flex-col`}
      aria-label="Documentation navigation"
    >
      {/* Navigation Content */}
      <nav className="flex-1 px-4 pb-4">
        {/* Quick Links Section */}
        <div className="mb-6">
          <div className={`px-2 py-1 text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Quick Links
          </div>
          <ul className="space-y-1">
            {Object.entries(quickLinks).map(([label, filename]) => (
              <li key={filename}>
                <button
                  onClick={() => handleQuickLinkClick(filename)}
                  className={`flex items-center w-full px-2 py-1 text-left rounded transition-colors ${
                    selectedDoc?.name === filename.replace('.md', '')
                      ? isDarkMode
                        ? 'bg-blue-900 text-blue-100'
                        : 'bg-blue-50 text-blue-700'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-current={selectedDoc?.name === filename.replace('.md', '') ? 'true' : undefined}
                >
                  <span className="truncate">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* All Documents */}
        <div>
          <div className={`px-2 py-1 text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            All Documents
          </div>
          {Object.entries(filteredDocuments).length === 0 ? (
            <p className={`p-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No documents found
            </p>
          ) : (
            <ul>
              {Object.entries(filteredDocuments).map(([name, details]) => (
                <li key={name}>
                  <button
                    onClick={() => onSelect(name, details)}
                    className={`flex items-center w-full px-2 py-1 my-1 text-left rounded transition-colors ${
                      selectedDoc?.name === name
                        ? isDarkMode
                          ? 'bg-blue-900 text-blue-100'
                          : 'bg-blue-50 text-blue-700'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    aria-current={selectedDoc?.name === name ? 'true' : undefined}
                  >
                    <span className="truncate">{name}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;