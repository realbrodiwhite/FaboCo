import React from 'react';
import ReactMarkdown from 'react-markdown';
import documentationReviewTrackingSystem from '../documents/documentation-review-tracking-system.md';

const DocumentationReviewTrackingSystem: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{documentationReviewTrackingSystem}</ReactMarkdown>
        </div>
    );
};

export default DocumentationReviewTrackingSystem;
