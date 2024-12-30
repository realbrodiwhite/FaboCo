import Link from 'next/link';
import React, { useState } from 'react';

interface Document {
  title: string;
  path: string;
}

const documents: Document[] = [
  { title: 'API Documentation', path: '/documents/api-documentation' },
  { title: 'Budget Planning Guide', path: '/documents/budget-planning-guide' },
  { title: 'Business Continuity Plan', path: '/documents/business-continuity-plan' },
  { title: 'Capital Expenditures', path: '/documents/capital-expenditures' },
  { title: 'Change Management Procedures', path: '/documents/change-management-procedures' },
  { title: 'Client Interface Guide', path: '/documents/client-interface-guide' },
  { title: 'Client Onboarding Guide', path: '/documents/client-onboarding-guide' },
  { title: 'Contract Management Guide', path: '/documents/contract-management-guide' },
  { title: 'Data Implementation Strategy', path: '/documents/data-implementation-strategy' },
  { title: 'Data Management Privacy Guide', path: '/documents/data-management-privacy-guide' },
  { title: 'Documentation Review Tracking System', path: '/documents/documentation-review-tracking-system' },
  { title: 'Emergency Response Plan', path: '/documents/emergency-response-plan' },
  { title: 'Equipment Asset Management Guide', path: '/documents/equipment-asset-management-guide' },
  { title: 'Executive Summary', path: '/documents/executive-summary' },
  { title: 'Financial Plan', path: '/documents/financial-plan' },
  { title: 'Grant Strategy', path: '/documents/grant-strategy' },
  { title: 'Image Documentation Protocol', path: '/documents/image-documentation-protocol' },
  { title: 'Incident Response Plan', path: '/documents/incident-response-plan' },
  { title: 'Information Security Guide', path: '/documents/information-security-guide' },
  { title: 'Investor Relations', path: '/documents/investor-relations' },
  { title: 'Knowledge Base Structure', path: '/documents/knowledge-base-structure' },
  { title: 'Operations Manual', path: '/documents/operations-manual' },
  { title: 'Project Management Guide', path: '/documents/project-mgmt-guide' },
  { title: 'Quality Standards', path: '/documents/quality-standards' },
  { title: 'Regulatory Compliance', path: '/documents/regulatory-compliance' },
  { title: 'Revenue Recognition', path: '/documents/revenue-recognition' },
  { title: 'Risk Management Plan', path: '/documents/risk-mgmt-plan' },
  { title: 'Safety Guidelines', path: '/documents/safety-guidelines' },
  { title: 'Service Catalog', path: '/documents/service-catalog' },
  { title: 'Standard Operating Procedures', path: '/documents/standard-operating-procedures' },
  { title: 'Strategic Financial Leverage', path: '/documents/strategic-financial-leverage' },
  { title: 'Strategic Financing Framework', path: '/documents/strategic-financing-framework' },
  { title: 'System Architecture Documentation', path: '/documents/system-architecture-documentation' },
  { title: 'Technology Implementation Roadmap', path: '/documents/technology-implementation-roadmap' },
  { title: 'Technology Integration Guide', path: '/documents/technology-integration-guide' },
  { title: 'Vendor Supplier Management', path: '/documents/vendor-supplier-mgmt' },
  { title: 'Year 1 Financial Roadmap', path: '/documents/year-1-financial-roadmap' },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // State for collapsible sections

  return (
    <nav className="w-1/4 bg-gray-200 p-4">
      <h2 className="font-bold cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        Documents {isOpen ? '▲' : '▼'}
      </h2>
      {isOpen && (
        <ul className="space-y-2">
          {documents.map((doc) => (
            <li key={doc.path}>
              <Link href={doc.path} className="text-blue-600 hover:underline">
                {doc.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
