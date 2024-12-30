import React from 'react';
import ReactMarkdown from 'react-markdown';
import strategicFinancialLeverage from '../documents/strategic-financial-leverage.md';

const StrategicFinancialLeverage: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{strategicFinancialLeverage}</ReactMarkdown>
        </div>
    );
};

export default StrategicFinancialLeverage;
