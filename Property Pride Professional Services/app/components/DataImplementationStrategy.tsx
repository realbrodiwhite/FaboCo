import React from 'react';
import ReactMarkdown from 'react-markdown';
import dataImplementationStrategy from '../documents/data-implementation-strategy.md';

const DataImplementationStrategy: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{dataImplementationStrategy}</ReactMarkdown>
        </div>
    );
};

export default DataImplementationStrategy;
