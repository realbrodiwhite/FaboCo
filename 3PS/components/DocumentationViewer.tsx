"use client";
import React, { Suspense, lazy, useEffect } from "react";
import { useDocumentManager } from "../hooks/useDocumentManager";
import { useThemeManager } from "../hooks/useThemeManager";
import { useDocumentSearch } from "../hooks/useDocumentSearch";
import { useZoom } from "../hooks/useZoom";
import { ErrorBoundary } from "./ErrorBoundary"; 
import { LoadingState } from "./LoadingState"; 
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import TableOfContents from './TableOfContents';
import { DocumentHeader } from './DocumentHeader';
import { WelcomeScreen } from './WelcomeScreen';
import styles from './DocumentationViewer.module.css';

const DocumentContent = lazy(() => import('./DocumentContent').then(module => ({ default: module.DocumentContent })));

const DocumentationViewer = () => {
    const { isDarkMode, toggleTheme } = useThemeManager();
    const { zoom, increaseZoom, decreaseZoom } = useZoom();
    const {
        state,
        handleDocumentSelect,
        handleBreadcrumbNav,
        handleSearchResults,
        loadInitialDocuments
    } = useDocumentManager();
    const {
        searchTerm,
        isSearching,
        handleSearchChange
    } = useDocumentSearch(handleSearchResults);

    useEffect(() => {
        // Load documents from the documents directory
        const loadDocuments = async () => {
            const response = await fetch('/api/documents/all'); // Updated API endpoint
            const documents = await response.json();
            loadInitialDocuments(documents); // Call to loadInitialDocuments
        };

        loadDocuments();
    }, [loadInitialDocuments]); // Dependency array to call on mount

    // Handle heading click in table of contents
    const handleHeadingClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Get recent documents
    const recentDocuments = Object.values(state.documents)
        .sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
        .slice(0, 4);

    return (
        <div className={`${styles.mainContainer} ${isDarkMode ? styles.darkMode : styles.lightMode}`}>
            <aside className={styles.sidebar}>
                <div className="p-4">
                    <SearchBar
                        documents={Object.values(state.documents)}
                        onSearch={handleSearchResults}
                        isDarkMode={isDarkMode}
                        isSearching={isSearching}
                    />
                </div>
                <Sidebar
                    documents={state.documents}
                    selectedDoc={state.selectedDoc}
                    onSelect={handleDocumentSelect}
                    filteredDocuments={state.documents}
                    isDarkMode={isDarkMode}
                />
            </aside>
            
            <main className={styles.mainContent}>
                <div className={styles.header}>
                    <button
                        onClick={toggleTheme}
                        className={styles.themeButton}
                        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>

                <Breadcrumb
                    navigationStack={state.navigationStack}
                    onNavigate={handleBreadcrumbNav}
                    isDarkMode={isDarkMode}
                />

                {state.selectedDoc && (
                    <DocumentHeader
                        title={state.selectedDoc.name}
                        zoom={zoom}
                        isDarkMode={isDarkMode}
                        onZoomIn={increaseZoom}
                        onZoomOut={decreaseZoom}
                    />
                )}

                <div className={styles.documentContent}>
                    {state.isLoading ? (
                        <LoadingState isDarkMode={isDarkMode} />
                    ) : state.selectedDoc ? (
                        <ErrorBoundary>
                            <div className={styles.mainDocument}>
                                <Suspense fallback={<LoadingState isDarkMode={isDarkMode} />}>
                                    <DocumentContent
                                        content={state.selectedDoc.content}
                                        isDarkMode={isDarkMode}
                                        zoom={zoom}
                                    />
                                </Suspense>
                            </div>
                            <div className={styles.tableOfContents}>
                                <TableOfContents
                                    content={state.selectedDoc.content}
                                    isDarkMode={isDarkMode}
                                    onHeadingClick={handleHeadingClick}
                                />
                            </div>
                        </ErrorBoundary>
                    ) : (
                        <WelcomeScreen
                            isDarkMode={isDarkMode}
                            recentDocuments={recentDocuments}
                            onDocumentSelect={handleDocumentSelect}
                        />
                    )}
                </div>
            </main>
        </div>
    );
};

export default DocumentationViewer;