import React from 'react';
import ReactMarkdown from 'react-markdown';
import vendorSupplierMgmt from '../documents/vendor-supplier-mgmt.md';

const VendorSupplierMgmt: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{vendorSupplierMgmt}</ReactMarkdown>
        </div>
    );
};

export default VendorSupplierMgmt;
