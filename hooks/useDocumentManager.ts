import { useReducer, useCallback } from 'react';
import { Document, DocumentDetails } from '../components/types';

interface DocumentState {
  documents: Record<string, DocumentDetails>;
  selectedDoc: Document | null;
  navigationStack: Document[];
  isLoading: boolean;
  isSearching: boolean;
}

type DocumentAction = 
  | { type: 'SET_DOCUMENTS'; payload: Record<string, DocumentDetails> }
  | { type: 'SET_SELECTED_DOC'; payload: Document | null }
  | { type: 'SET_NAVIGATION_STACK'; payload: Document[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_SEARCHING'; payload: boolean }
  | { type: 'LOAD_INITIAL_DOCUMENTS'; payload: Record<string, DocumentDetails> };

const initialState: DocumentState = {
  documents: {},
  selectedDoc: null,
  navigationStack: [],
  isLoading: true,
  isSearching: false
};

function documentReducer(state: DocumentState, action: DocumentAction): DocumentState {
  switch (action.type) {
    case 'SET_DOCUMENTS':
      return { ...state, documents: action.payload };
    case 'SET_SELECTED_DOC':
      return { ...state, selectedDoc: action.payload };
    case 'SET_NAVIGATION_STACK':
      return { ...state, navigationStack: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_SEARCHING':
      return { ...state, isSearching: action.payload };
    case 'LOAD_INITIAL_DOCUMENTS':
      return {
        ...state,
        documents: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}

export function useDocumentManager() {
  const [state, dispatch] = useReducer(documentReducer, initialState);

  const handleDocumentSelect = useCallback((docName: string | null, details?: DocumentDetails) => {
    console.log("handleDocumentSelect called with:", docName, details);
    if (!docName) {
      dispatch({ type: 'SET_SELECTED_DOC', payload: null });
      dispatch({ type: 'SET_NAVIGATION_STACK', payload: [] });
      return;
    }
    
    const doc = state.documents[docName] || details;
    if (doc) {
      dispatch({ type: 'SET_SELECTED_DOC', payload: doc });
      dispatch({ type: 'SET_NAVIGATION_STACK', payload: [...state.navigationStack, doc] });
    }
  }, [state.documents, state.navigationStack]);

  const handleBreadcrumbNav = useCallback((index: number) => {
    console.log("handleBreadcrumbNav called with index:", index);
    if (index === -1) {
      dispatch({ type: 'SET_SELECTED_DOC', payload: null });
      dispatch({ type: 'SET_NAVIGATION_STACK', payload: [] });
      return;
    }
    
    const newStack = state.navigationStack.slice(0, index + 1);
    const lastDoc = newStack[newStack.length - 1];
    if (lastDoc) {
      dispatch({ type: 'SET_NAVIGATION_STACK', payload: newStack });
      dispatch({ type: 'SET_SELECTED_DOC', payload: lastDoc });
    }
  }, [state.navigationStack]);

  const handleSearchResults = useCallback((results: Document[]) => {
    console.log("handleSearchResults called with results:", results);
    const searchResults = results.reduce((acc: Record<string, DocumentDetails>, doc) => {
      if ('name' in doc) {
        acc[doc.name] = doc as DocumentDetails;
      }
      return acc;
    }, {});
    dispatch({ type: 'SET_DOCUMENTS', payload: searchResults });
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  }, []);

  const setSearching = useCallback((searching: boolean) => {
    dispatch({ type: 'SET_SEARCHING', payload: searching });
  }, []);

  const loadInitialDocuments = useCallback((documents: Record<string, DocumentDetails>) => {
    dispatch({ type: 'LOAD_INITIAL_DOCUMENTS', payload: documents });
  }, []);

  return {
    state,
    handleDocumentSelect,
    handleBreadcrumbNav,
    handleSearchResults,
    setLoading,
    setSearching,
    loadInitialDocuments
  };
}
