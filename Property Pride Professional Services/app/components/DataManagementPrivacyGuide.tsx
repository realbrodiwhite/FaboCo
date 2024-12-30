import React from 'react';
import ReactMarkdown from 'react-markdown';
import dataManagementPrivacyGuide from '../documents/data-management-privacy-guide.md';

const DataManagementPrivacyGuide: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{dataManagementPrivacyGuide}</ReactMarkdown>
        </div>
    );
};

export default DataManagementPrivacyGuide;
