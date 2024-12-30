import React from 'react';
import ReactMarkdown from 'react-markdown';
import riskMgmtPlan from '../documents/risk-mgmt-plan.md';

const RiskMgmtPlan: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{riskMgmtPlan}</ReactMarkdown>
        </div>
    );
};

export default RiskMgmtPlan;
