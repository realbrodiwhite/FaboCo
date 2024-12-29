import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Document } from './types';

describe('SearchBar Component', () => {
  const mockDocuments: Document[] = [
    { 
      name: 'Document 1', 
      content: 'Content of document 1', 
      kbRefs: [], 
      version: '1.0', 
      lastUpdated: new Date().toISOString(), 
      category: 'General',
      matches: { title: false, content: false }
    },
    { 
      name: 'Document 2', 
      content: 'Content of document 2', 
      kbRefs: [], 
      version: '1.0', 
      lastUpdated: new Date().toISOString(), 
      category: 'General',
      matches: { title: false, content: false }
    },
  ];
  const mockOnSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly', () => {
    const { getByPlaceholderText } = render(
      <SearchBar documents={mockDocuments} onSearch={mockOnSearch} />
    );
    expect(getByPlaceholderText('Search documentation... (Ctrl/⌘ + K)')).toBeInTheDocument();
  });

  test('search functionality works', () => {
    const { getByPlaceholderText } = render(
      <SearchBar documents={mockDocuments} onSearch={mockOnSearch} />
    );
    const input = getByPlaceholderText('Search documentation... (Ctrl/⌘ + K)');
    
    fireEvent.change(input, { target: { value: 'Document 1' } });
    expect(mockOnSearch).toHaveBeenCalledWith([mockDocuments[0]]);
  });

  test('updates search history', () => {
    const { getByPlaceholderText } = render(
      <SearchBar documents={mockDocuments} onSearch={mockOnSearch} />
    );
    const input = getByPlaceholderText('Search documentation... (Ctrl/⌘ + K)');
    
    fireEvent.change(input, { target: { value: 'Document 1' } });
    fireEvent.change(input, { target: { value: 'Document 2' } });
    
    expect(localStorage.getItem('searchHistory')).toContain('Document 1');
    expect(localStorage.getItem('searchHistory')).toContain('Document 2');
  });

  test('keyboard shortcut works', () => {
    const { getByPlaceholderText } = render(
      <SearchBar documents={mockDocuments} onSearch={mockOnSearch} />
    );
    const input = getByPlaceholderText('Search documentation... (Ctrl/⌘ + K)');
    
    fireEvent.keyDown(window, { ctrlKey: true, key: 'k' });
    expect(input).toHaveFocus();
  });
});
