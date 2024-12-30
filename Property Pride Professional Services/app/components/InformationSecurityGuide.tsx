import React from 'react';
import ReactMarkdown from 'react-markdown';
import informationSecurityGuide from '../documents/information-security-guide.md';

const InformationSecurityGuide: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{informationSecurityGuide}</ReactMarkdown>
        </div>
    );
};

export default InformationSecurityGuide;
