"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { Document, DocumentDetails } from '../components/types';

const HomePage = () => {
    const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
    const [documents, setDocuments] = useState<Record<string, DocumentDetails>>({});

    useEffect(() => {
        const fetchDocuments = async () => {
            const response = await fetch('/api/documents/all');
            const data = await response.json();
            setDocuments(data);
        };

        fetchDocuments();
    }, []);

    const handleSelect = (docName: string | null, details?: DocumentDetails) => {
        setSelectedDoc(details || null);
    };

    return (
        <div className="flex">
            <Sidebar
                documents={documents}
                selectedDoc={selectedDoc}
                onSelect={handleSelect}
                filteredDocuments={documents}
            />
            <main className="flex-1 p-4">
                {selectedDoc ? (
                    <div>
                        <h2>{selectedDoc.name}</h2>
                        <p>{selectedDoc.content}</p>
                    </div>
                ) : (
                    <div>
                        <h1>Welcome to the Documentation Portal</h1>
                        <p>Select a document from the sidebar to view its content.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default HomePage;
