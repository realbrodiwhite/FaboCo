import React from 'react';
import ReactMarkdown from 'react-markdown';
import strategicFinancingFramework from '../documents/strategic-financing-framework.md';

const StrategicFinancingFramework: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{strategicFinancingFramework}</ReactMarkdown>
        </div>
    );
};

export default StrategicFinancingFramework;
