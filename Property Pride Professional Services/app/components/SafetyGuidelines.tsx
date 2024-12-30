import React from 'react';
import ReactMarkdown from 'react-markdown';
import safetyGuidelines from '../documents/safety-guidelines.md';

const SafetyGuidelines: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{safetyGuidelines}</ReactMarkdown>
        </div>
    );
};

export default SafetyGuidelines;
