import React from 'react';
import ReactMarkdown from 'react-markdown';
import incidentResponsePlan from '../documents/incident-response-plan.md';

const IncidentResponsePlan: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{incidentResponsePlan}</ReactMarkdown>
        </div>
    );
};

export default IncidentResponsePlan;
