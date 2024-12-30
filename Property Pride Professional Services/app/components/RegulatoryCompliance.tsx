import React from 'react';
import ReactMarkdown from 'react-markdown';
import regulatoryCompliance from '../documents/regulatory-compliance.md';

const RegulatoryCompliance: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{regulatoryCompliance}</ReactMarkdown>
        </div>
    );
};

export default RegulatoryCompliance;
