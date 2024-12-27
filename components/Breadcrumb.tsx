import React from 'react';
import { Document } from './types';

interface BreadcrumbProps {
  navigationStack: Document[];
  onNavigate: (index: number) => void;
  isDarkMode?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  navigationStack,
  onNavigate,
  isDarkMode = false,
}) => {
  if (navigationStack.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb"
      className={`px-4 py-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}
    >
      <ol className="flex flex-wrap items-center space-x-2 text-sm">
        <li className="flex items-center">
          <button
            onClick={() => onNavigate(-1)}
            className={`hover:underline ${
              isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-label="Home"
          >
            📚 Docs
          </button>
        </li>
        {navigationStack.map((doc, index) => (
          <li key={`${doc.name}-${index}`} className="flex items-center">
            <span 
              className={`mx-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}
              aria-hidden="true"
            >
              /
            </span>
            {index === navigationStack.length - 1 ? (
              <span 
                className={`font-medium ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-900'
                }`}
                aria-current="page"
              >
                {doc.name}
              </span>
            ) : (
              <button
                onClick={() => onNavigate(index)}
                className={`hover:underline ${
                  isDarkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {doc.name}
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
