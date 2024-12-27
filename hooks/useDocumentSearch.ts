import { useState, useEffect, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { Document, DocumentDetails } from '../components/types';

export function useDocumentSearch(onSearchResults: (results: Document[]) => void) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    let isActive = true;

    const searchDocuments = async () => {
      if (!debouncedSearchTerm.trim()) {
        setIsSearching(false);
        return;
      }

      setIsSearching(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(debouncedSearchTerm)}`);
        if (!response.ok) throw new Error('Search request failed');
        
        const data = await response.json();
        if (data.error) {
          console.error('Search error:', data.error);
          return;
        }

        if (isActive) {
          onSearchResults(data.results);
        }
      } catch (error) {
        console.error('Error searching documents:', error);
      } finally {
        if (isActive) {
          setIsSearching(false);
        }
      }
    };

    const timeoutId = setTimeout(searchDocuments, 300);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [debouncedSearchTerm, onSearchResults]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  return {
    searchTerm,
    isSearching,
    handleSearchChange
  };
}
