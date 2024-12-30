import React from 'react';
import ReactMarkdown from 'react-markdown';
import serviceCatalog from '../documents/service-catalog.md';

const ServiceCatalog: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{serviceCatalog}</ReactMarkdown>
        </div>
    );
};

export default ServiceCatalog;
