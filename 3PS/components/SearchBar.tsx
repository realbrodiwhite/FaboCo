import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { useDebounce } from '../hooks/useDebounce';
import { Document } from './types';

interface SearchBarProps {
  documents: Document[];
  onSearch: (results: Document[]) => void;
  isDarkMode?: boolean;
  isSearching?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = React.memo(({
  documents,
  onSearch,
  isDarkMode = false,
  isSearching = false,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('searchHistory');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Configure Fuse.js options
  const fuseOptions = {
    keys: ['name', 'content'],
    includeScore: true,
    threshold: 0.3,
    minMatchCharLength: 2,
  };

  // Use useMemo to create the Fuse instance only when documents change
  const fuse = useMemo(() => new Fuse(documents, fuseOptions), [documents]);

  // Perform search
  const performSearch = useCallback((term: string) => {
    if (!term.trim()) {
      onSearch(documents);
      return;
    }

    console.log('Performing search with term:', term);
    const results = fuse.search(term).map(result => result.item);
    console.log('Search results:', results);
    console.log('Search term:', term);
    console.log('Search results:', results);
    onSearch(results);

    // Update search history only if the term is not already in the history
    if (term.trim() && !searchHistory.includes(term)) {
      const newHistory = [term, ...searchHistory].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
    }
  }, [documents, fuse, onSearch, searchHistory]);

  // Effect for debounced search
  useEffect(() => {
    performSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, performSearch]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.querySelector<HTMLInputElement>('input[type="search"]')?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative">
      <div className={`relative group ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
        <input
          type="search"
          placeholder="Search documentation... (Ctrl/⌘ + K)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-blue-400'
              : 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500'
          }`}
          aria-label="Search documentation"
        />
        <span 
          className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
          aria-hidden="true"
        >
          🔍
        </span>
        {isSearching && (
          <span 
            className="absolute right-3 top-2.5 animate-spin"
            aria-hidden="true"
          >
            ⌛
          </span>
        )}
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className={`absolute right-3 top-2.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-gray-700`}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Search History */}
      {searchTerm && searchHistory.length > 0 && (
        <div className={`absolute z-10 w-full mt-1 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className={`px-3 py-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Recent Searches
          </div>
          <ul>
            {searchHistory.map((term, index) => (
              <li key={index}>
                <button
                  onClick={() => setSearchTerm(term)}
                  className={`w-full px-4 py-2 text-left hover:${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  {term}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SearchBar;
