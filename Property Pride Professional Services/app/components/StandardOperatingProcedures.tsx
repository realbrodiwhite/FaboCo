import React from 'react';
import ReactMarkdown from 'react-markdown';
import standardOperatingProcedures from '../documents/standard-operating-procedures.md';

const StandardOperatingProcedures: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{standardOperatingProcedures}</ReactMarkdown>
        </div>
    );
};

export default StandardOperatingProcedures;
