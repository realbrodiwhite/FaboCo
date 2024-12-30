import React from 'react';
import ReactMarkdown from 'react-markdown';
import revenueRecognition from '../documents/revenue-recognition.md';

const RevenueRecognition: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{revenueRecognition}</ReactMarkdown>
        </div>
    );
};

export default RevenueRecognition;
