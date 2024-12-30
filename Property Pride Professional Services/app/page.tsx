"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import DocumentList from './components/DocumentList';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const documents = [
    { title: 'API Documentation', path: '/documents/api-documentation', description: 'Overview of the API endpoints and usage.' },
    { title: 'Budget Planning Guide', path: '/documents/budget-planning-guide', description: 'Guidelines for effective budget planning.' },
    { title: 'Business Continuity Plan', path: '/documents/business-continuity-plan', description: 'Strategies for maintaining business operations.' },
    { title: 'Capital Expenditures', path: '/documents/capital-expenditures', description: 'Details on capital expenditure processes.' },
    { title: 'Change Management Procedures', path: '/documents/change-management-procedures', description: 'Procedures for managing organizational changes.' },
    { title: 'Client Interface Guide', path: '/documents/client-interface-guide', description: 'Guide for client interactions and interfaces.' },
    { title: 'Client Onboarding Guide', path: '/documents/client-onboarding-guide', description: 'Steps for onboarding new clients.' },
    { title: 'Contract Management Guide', path: '/documents/contract-management-guide', description: 'Best practices for managing contracts.' },
    { title: 'Data Implementation Strategy', path: '/documents/data-implementation-strategy', description: 'Strategies for data implementation.' },
    { title: 'Data Management Privacy Guide', path: '/documents/data-management-privacy-guide', description: 'Guidelines for data privacy management.' },
    { title: 'Documentation Review Tracking System', path: '/documents/documentation-review-tracking-system', description: 'System for tracking documentation reviews.' },
    { title: 'Emergency Response Plan', path: '/documents/emergency-response-plan', description: 'Plan for responding to emergencies.' },
    { title: 'Equipment Asset Management Guide', path: '/documents/equipment-asset-management-guide', description: 'Guide for managing equipment assets.' },
    { title: 'Executive Summary', path: '/documents/executive-summary', description: 'Summary of key business strategies.' },
    { title: 'Financial Plan', path: '/documents/financial-plan', description: 'Comprehensive financial planning guide.' },
    { title: 'Grant Strategy', path: '/documents/grant-strategy', description: 'Strategies for securing grants.' },
    { title: 'Image Documentation Protocol', path: '/documents/image-documentation-protocol', description: 'Protocol for documenting images.' },
    { title: 'Incident Response Plan', path: '/documents/incident-response-plan', description: 'Plan for responding to incidents.' },
    { title: 'Information Security Guide', path: '/documents/information-security-guide', description: 'Guide for maintaining information security.' },
    { title: 'Investor Relations', path: '/documents/investor-relations', description: 'Strategies for managing investor relations.' },
    { title: 'Knowledge Base Structure', path: '/documents/knowledge-base-structure', description: 'Structure for organizing knowledge bases.' },
    { title: 'Operations Manual', path: '/documents/operations-manual', description: 'Manual for operational procedures.' },
    { title: 'Project Management Guide', path: '/documents/project-mgmt-guide', description: 'Guide for effective project management.' },
    { title: 'Quality Standards', path: '/documents/quality-standards', description: 'Standards for maintaining quality.' },
    { title: 'Regulatory Compliance', path: '/documents/regulatory-compliance', description: 'Guidelines for regulatory compliance.' },
    { title: 'Revenue Recognition', path: '/documents/revenue-recognition', description: 'Principles for revenue recognition.' },
    { title: 'Risk Management Plan', path: '/documents/risk-mgmt-plan', description: 'Plan for managing risks.' },
    { title: 'Safety Guidelines', path: '/documents/safety-guidelines', description: 'Guidelines for ensuring safety.' },
    { title: 'Service Catalog', path: '/documents/service-catalog', description: 'Catalog of available services.' },
    { title: 'Standard Operating Procedures', path: '/documents/standard-operating-procedures', description: 'Procedures for standard operations.' },
    { title: 'Strategic Financial Leverage', path: '/documents/strategic-financial-leverage', description: 'Strategies for financial leverage.' },
    { title: 'Strategic Financing Framework', path: '/documents/strategic-financing-framework', description: 'Framework for strategic financing.' },
    { title: 'System Architecture Documentation', path: '/documents/system-architecture-documentation', description: 'Documentation of system architecture.' },
    { title: 'Technology Implementation Roadmap', path: '/documents/technology-implementation-roadmap', description: 'Roadmap for technology implementation.' },
    { title: 'Technology Integration Guide', path: '/documents/technology-integration-guide', description: 'Guide for integrating technology.' },
    { title: 'Vendor Supplier Management', path: '/documents/vendor-supplier-mgmt', description: 'Management of vendor and supplier relationships.' },
    { title: 'Year 1 Financial Roadmap', path: '/documents/year-1-financial-roadmap', description: 'Financial roadmap for the first year.' },
  ];

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Header onSearch={setSearchTerm} />
      <Sidebar documents={documents} />
      <main className="flex-grow p-4">
        <DocumentList documents={filteredDocuments} />
      </main>
      <Footer />
    </div>
  );
}