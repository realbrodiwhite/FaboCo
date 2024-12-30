import React from 'react';
import ReactMarkdown from 'react-markdown';
import grantStrategy from '../documents/grant-strategy.md';

const GrantStrategy: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{grantStrategy}</ReactMarkdown>
        </div>
    );
};

export default GrantStrategy;
