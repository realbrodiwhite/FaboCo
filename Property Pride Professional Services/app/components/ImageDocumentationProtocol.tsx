import React from 'react';
import ReactMarkdown from 'react-markdown';
import imageDocumentationProtocol from '../documents/image-documentation-protocol.md';

const ImageDocumentationProtocol: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{imageDocumentationProtocol}</ReactMarkdown>
        </div>
    );
};

export default ImageDocumentationProtocol;
