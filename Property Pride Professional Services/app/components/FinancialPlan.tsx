import React from 'react';
import ReactMarkdown from 'react-markdown';
import financialPlan from '../documents/financial-plan.md';

const FinancialPlan: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{financialPlan}</ReactMarkdown>
        </div>
    );
};

export default FinancialPlan;
