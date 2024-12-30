import React from 'react';
import ReactMarkdown from 'react-markdown';
import systemArchitectureDocumentation from '../documents/system-architecture-documentation.md';

const SystemArchitectureDocumentation: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{systemArchitectureDocumentation}</ReactMarkdown>
        </div>
    );
};

export default SystemArchitectureDocumentation;
