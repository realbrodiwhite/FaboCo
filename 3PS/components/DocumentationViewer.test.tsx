import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DocumentationViewer from './DocumentationViewer';
import '@testing-library/jest-dom';

const mockDocumentData = {
  'Executive Summary': {
    name: 'Executive Summary',
    content: 'Company overview and strategic direction',
    version: '1.0',
    lastUpdated: '2023-01-01',
    kbRefs: []
  },
  'Financial Plan': {
    name: 'Financial Plan',
    content: 'Financial planning details',
    version: '1.0',
    lastUpdated: '2023-01-01',
    kbRefs: []
  }
};

// Mock fetch responses
beforeEach(() => {
  global.fetch = jest.fn().mockImplementation((url) => {
    if (url.toString().includes('/api/search')) {
      const searchParams = new URL(url.toString()).searchParams;
      const query = searchParams.get('q');
      const results = Object.values(mockDocumentData).filter(doc => 
        doc.name.toLowerCase().includes((query || '').toLowerCase()) ||
        doc.content.toLowerCase().includes((query || '').toLowerCase())
      );
      return Promise.resolve(new Response(JSON.stringify({ results })));
    }
    return Promise.resolve(new Response(JSON.stringify({ 
      results: Object.values(mockDocumentData) 
    })));
  });
});

describe('DocumentationViewer', () => {
  test('renders the Documentation Viewer', async () => {
    render(<DocumentationViewer />);
    await waitFor(() => {
      expect(screen.getByText(/Documentation/i)).toBeInTheDocument();
    });
  });

  test('displays loading message when loading', async () => {
    render(<DocumentationViewer />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  test('displays document content when a document is selected', async () => {
    render(<DocumentationViewer />);
    
    await waitFor(() => {
      expect(screen.getByText(/Executive Summary/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Executive Summary/i));
    
    await waitFor(() => {
      expect(screen.getByText(/Company overview and strategic direction/i)).toBeInTheDocument();
    });
  });

  test('filters documents based on search term', async () => {
    render(<DocumentationViewer />);
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Search documentation.../i)).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/Search documentation.../i);
    fireEvent.change(searchInput, { target: { value: 'financial' } });
    
    await waitFor(() => {
      expect(screen.getByText(/Financial Plan/i)).toBeInTheDocument();
      expect(screen.queryByText(/Executive Summary/i)).not.toBeInTheDocument();
    });
  });
});
