import React from 'react';
import ReactMarkdown from 'react-markdown';
import knowledgeBaseStructure from '../documents/knowledge-base-structure.md';

const KnowledgeBaseStructure: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{knowledgeBaseStructure}</ReactMarkdown>
        </div>
    );
};

export default KnowledgeBaseStructure;
