import React from 'react';
import ReactMarkdown from 'react-markdown';
import emergencyResponsePlan from '../documents/emergency-response-plan.md';

const EmergencyResponsePlan: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{emergencyResponsePlan}</ReactMarkdown>
        </div>
    );
};

export default EmergencyResponsePlan;
