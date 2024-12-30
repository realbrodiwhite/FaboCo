import React from 'react';
import ReactMarkdown from 'react-markdown';
import technologyIntegrationGuide from '../documents/technology-integration-guide.md';

const TechnologyIntegrationGuide: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{technologyIntegrationGuide}</ReactMarkdown>
        </div>
    );
};

export default TechnologyIntegrationGuide;
