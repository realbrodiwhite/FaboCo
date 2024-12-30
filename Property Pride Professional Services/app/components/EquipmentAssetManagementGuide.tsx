import React from 'react';
import ReactMarkdown from 'react-markdown';
import equipmentAssetManagementGuide from '../documents/equipment-asset-management-guide.md';

const EquipmentAssetManagementGuide: React.FC = () => {
    return (
        <div>
            <ReactMarkdown>{equipmentAssetManagementGuide}</ReactMarkdown>
        </div>
    );
};

export default EquipmentAssetManagementGuide;
