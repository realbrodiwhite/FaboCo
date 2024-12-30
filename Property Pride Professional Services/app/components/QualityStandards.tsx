import React from 'react';
import ReactMarkdown from 'react-markdown';
import qualityStandards from '../documents/quality-standards.md';

const QualityStandards: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{qualityStandards}</ReactMarkdown>
        </div>
    );
};

export default QualityStandards;
