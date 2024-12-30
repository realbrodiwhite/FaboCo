import React from 'react';
import ReactMarkdown from 'react-markdown';
import year1FinancialRoadmap from '../documents/year-1-financial-roadmap.md';

const Year1FinancialRoadmap: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{year1FinancialRoadmap}</ReactMarkdown>
        </div>
    );
};

export default Year1FinancialRoadmap;
