import React from 'react';
import styles from './DocumentationViewer.module.css';
import { DocumentDetails } from './types';

interface WelcomeScreenProps {
  isDarkMode: boolean;
  recentDocuments: DocumentDetails[];
  onDocumentSelect: (docName: string) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = React.memo(({
  isDarkMode,
  recentDocuments,
  onDocumentSelect
}) => {
  const quickStartDocs = ['Executive Summary', 'Service Catalog', 'Training Manual'];
  const popularGuides = ['API Documentation', 'Client Onboarding', 'Standard Operating Procedures'];

  return (
    <div className={`min-h-full ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-extrabold tracking-tight mb-4 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-900'
          }`}>
            Documentation Portal
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Your gateway to Property Pride Professional Services knowledge base
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Quick Start Section */}
          <div className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'
          }`}>
            <div className="p-8">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                isDarkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Quick Start
              </h2>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {quickStartDocs.map(doc => (
                  <li key={doc} className="flex items-center cursor-pointer hover:underline" onClick={() => onDocumentSelect(doc)}>
                    <span className="mr-2">→</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popular Guides Section */}
          <div className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'
          }`}>
            <div className="p-8">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                isDarkMode ? 'bg-purple-900/50 text-purple-400' : 'bg-purple-100 text-purple-600'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Popular Guides
              </h2>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {popularGuides.map(doc => (
                  <li key={doc} className="flex items-center cursor-pointer hover:underline" onClick={() => onDocumentSelect(doc)}>
                    <span className="mr-2">→</span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pro Tips Section */}
          <div className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-xl'
          }`}>
            <div className="p-8">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                isDarkMode ? 'bg-green-900/50 text-green-400' : 'bg-green-100 text-green-600'
              }`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Pro Tips
              </h2>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li className="flex items-center">
                  <span className="mr-2">⌘</span>
                  F to search
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⌘</span>
                  +/- to zoom
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⌘</span>
                  D for dark mode
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recently Updated Section */}
        {recentDocuments.length > 0 && (
          <div className={`rounded-2xl shadow-lg overflow-hidden ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-semibold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                  Recently Updated
                </h2>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Last 7 days
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentDocuments.map(doc => (
                  <div
                    key={doc.name}
                    className={`p-4 rounded-xl transition-colors cursor-pointer ${
                      isDarkMode
                        ? 'bg-gray-750 hover:bg-gray-700'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => onDocumentSelect(doc.name)}
                    role="button"
                    tabIndex={0}
                  >
                    <h3 className={`font-medium mb-1 ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                      {doc.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Updated {new Date(doc.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

WelcomeScreen.displayName = 'WelcomeScreen';
