import React from 'react';
import ReactMarkdown from 'react-markdown';
import projectMgmtGuide from '../documents/project-mgmt-guide.md';

const ProjectMgmtGuide: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{projectMgmtGuide}</ReactMarkdown>
        </div>
    );
};

export default ProjectMgmtGuide;
