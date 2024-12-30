import React from 'react';
import ReactMarkdown from 'react-markdown';
import investorRelations from '../documents/investor-relations.md';

const InvestorRelations: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{investorRelations}</ReactMarkdown>
        </div>
    );
};

export default InvestorRelations;
