import React from 'react';
import ReactMarkdown from 'react-markdown';
import technologyImplementationRoadmap from '../documents/technology-implementation-roadmap.md';

const TechnologyImplementationRoadmap: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{technologyImplementationRoadmap}</ReactMarkdown>
        </div>
    );
};

export default TechnologyImplementationRoadmap;
