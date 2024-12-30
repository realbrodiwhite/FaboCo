import React from 'react';
import ReactMarkdown from 'react-markdown';
import operationsManual from '../documents/operations-manual.md';

const OperationsManual: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{operationsManual}</ReactMarkdown>
        </div>
    );
};

export default OperationsManual;
