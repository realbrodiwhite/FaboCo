import React from 'react';
import ReactMarkdown from 'react-markdown';
import executiveSummary from '../documents/executive-summary.md';

const ExecutiveSummary: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{executiveSummary}</ReactMarkdown>
        </div>
    );
};

export default ExecutiveSummary;
