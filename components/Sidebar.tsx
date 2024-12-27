import React from 'react';
import { Document, DocumentDetails } from './types';

interface SidebarProps {
  documents: Record<string, DocumentDetails>;
  selectedDoc: Document | null;
  onSelect: (docName: string | null, details?: DocumentDetails) => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredDocuments: Record<string, DocumentDetails>;
  isSearching: boolean;
  isDarkMode?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  documents,
  selectedDoc,
  onSelect,
  searchTerm,
  onSearchChange,
  filteredDocuments,
  isSearching,
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
      className={`w-80 ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-r overflow-y-auto flex flex-col`}
      aria-label="Documentation navigation"
    >
      {/* Search Section */}
      <div className={`sticky top-0 z-10 border-b ${
        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="p-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search documentation..."
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-blue-400'
                  : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
              }`}
              value={searchTerm}
              onChange={onSearchChange}
              aria-label="Search documentation"
            />
            <span className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} aria-hidden="true">
              🔍
            </span>
            {isSearching && (
              <span className="absolute right-3 top-2.5 animate-spin" aria-hidden="true">⌛</span>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Content */}
      <nav className="flex-1 px-4 pb-4">
        {/* Quick Links Section */}
        {!searchTerm && (
          <div className="mb-6">
            <div className={`px-2 py-1 text-sm font-semibold ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
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
        )}

        {/* All Documents */}
        <div>
          <div className={`px-2 py-1 text-sm font-semibold ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {searchTerm ? 'Search Results' : 'All Documents'}
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
