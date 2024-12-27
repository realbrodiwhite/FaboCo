import '@testing-library/jest-dom';
import React from 'react';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock react-markdown
jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }) => <div data-testid="markdown">{children}</div>
}));

// Mock react-syntax-highlighter and all its submodules
jest.mock('react-syntax-highlighter', () => ({
  __esModule: true,
  Prism: ({ children }) => <pre data-testid="syntax-highlighter">{children}</pre>
}));

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  __esModule: true,
  default: {},
  vs: {},
  vscDarkPlus: {}
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn()
  }),
  useSearchParams: () => ({
    get: jest.fn()
  })
}));

// Mock CSS modules
jest.mock('*.module.css', () => ({
  __esModule: true,
  default: new Proxy({}, {
    get: () => 'mocked-css-class'
  })
}));

// Setup fetch mock
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ results: [] })
  })
);

// Clear mocks between tests
beforeEach(() => {
  jest.clearAllMocks();
});
