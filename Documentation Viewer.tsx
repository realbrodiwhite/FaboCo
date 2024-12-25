import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, ChevronDown, Book, FileText, Link as LinkIcon, ArrowLeft, Home } from 'lucide-react';

interface Document {
  content?: string;
  kbRefs?: string[];
  version?: string;
  lastUpdated?: string;
  category?: string;
  name?: string;
}

interface DocumentDetails extends Document {
  category: string;
  content: string;
  version: string;
  lastUpdated: string;
  kbRefs: string[];
  name: string;
}

interface Documents {
  [key: string]: DocumentDetails;
}

interface DocumentStructure {
  [category: string]: {
    [docName: string]: DocumentDetails;
  };
}

interface LandingPageProps {
  onNavigate: (route: string) => void;
}

interface SidebarProps {
  documents: Documents;
  selectedDoc: Document | null;
  onSelect: (docName: string | null, details?: DocumentDetails) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

// Helper function to create empty document details
const createEmptyDoc = (name: string, category: string): DocumentDetails => ({
  category,
  content: "",
  version: "1.0.0",
  lastUpdated: "2024-12-24",
  kbRefs: [],
  name
});

// Type guard to check if an object is a DocumentDetails
const isDocumentDetails = (obj: any): obj is DocumentDetails => {
  return obj && 
    typeof obj.category === 'string' &&
    typeof obj.content === 'string' &&
    typeof obj.version === 'string' &&
    typeof obj.lastUpdated === 'string' &&
    Array.isArray(obj.kbRefs) &&
    typeof obj.name === 'string';
};

// Landing page component
const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const featuredDocs = [
    { title: "Getting Started", icon: Home, route: "Executive Summary", 
      description: "Overview of our services and company" },
    { title: "Core Services", icon: Book, route: "Service Catalog",
      description: "Comprehensive guide to our service offerings" },
    { title: "Technology Integration", icon: FileText, route: "Technology Integration Guide",
      description: "Our Knowledge Multiplication System™ and technology stack" }
  ];

  const popularDocs = [
    "Operations Manual",
    "Safety Guidelines",
    "Client Interface Guide",
    "Quality Standards"
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Monte Vista Complete Property Services
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Your comprehensive guide to our services, processes, and technologies.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {featuredDocs.map((card) => (
          <button
            key={card.title}
            onClick={() => onNavigate(card.route)}
            className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <card.icon className="w-6 h-6 text-blue-600" />
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Documentation</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {popularDocs.map((doc) => (
          <button
            key={doc}
            onClick={() => onNavigate(doc)}
            className="flex items-center w-full p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 group"
          >
            <FileText className="w-5 h-5 text-gray-400 group-hover:text-blue-500 mr-3" />
            <span className="text-gray-700 group-hover:text-gray-900">{doc}</span>
            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 ml-auto" />
          </button>
        ))}
      </div>
    </div>
  );
};

// Sidebar navigation component
const Sidebar: React.FC<SidebarProps> = ({ documents, selectedDoc, onSelect, searchTerm, onSearchChange }) => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Define the document structure with all available documents
  const initialDocumentStructure: DocumentStructure = {
    "Getting Started": {
      "Executive Summary": createEmptyDoc("Executive Summary", "Getting Started"),
      "Pitch Deck": createEmptyDoc("Pitch Deck", "Getting Started"),
      "Service Catalog": createEmptyDoc("Service Catalog", "Getting Started"),
      "Doc Inventory": createEmptyDoc("Doc Inventory", "Getting Started"),
      "required-docs": createEmptyDoc("required-docs", "Getting Started"),
      "Service Level Agreements Guide": createEmptyDoc("Service Level Agreements Guide", "Getting Started"),
      "Client Onboarding Guide": createEmptyDoc("Client Onboarding Guide", "Getting Started")
    },
    "Core Services": {
      "Landscaping Services": createEmptyDoc("Landscaping Services", "Core Services"),
      "Packout Services": createEmptyDoc("Packout Services", "Core Services"),
      "Professional Finishing Services": createEmptyDoc("Professional Finishing Services", "Core Services"),
      "Service Marking and Concrete": createEmptyDoc("Service Marking and Concrete", "Core Services"),
      "Standard Operating Procedures Manual": createEmptyDoc("Standard Operating Procedures Manual", "Core Services")
    },
    "Operations & Quality": {
      "Operations Manual": createEmptyDoc("Operations Manual", "Operations & Quality"),
      "Quality Standards": createEmptyDoc("Quality Standards", "Operations & Quality"),
      "Equipment & Asset Management Guide": createEmptyDoc("Equipment & Asset Management Guide", "Operations & Quality"),
      "Vendor and Supplier Management Guide": createEmptyDoc("Vendor and Supplier Management Guide", "Operations & Quality"),
      "Environmental Management Plan": createEmptyDoc("Environmental Management Plan", "Operations & Quality"),
      "project-management-methodology-guide": createEmptyDoc("project-management-methodology-guide", "Operations & Quality")
    },
    "Technology & Systems": {
      "Technology Integration Guide": createEmptyDoc("Technology Integration Guide", "Technology & Systems"),
      "Technology Implementation Roadmap": createEmptyDoc("Technology Implementation Roadmap", "Technology & Systems"),
      "Data Implementation and Integration Strategy": createEmptyDoc("Data Implementation and Integration Strategy", "Technology & Systems"),
      "Data Management & Privacy Guide": createEmptyDoc("Data Management & Privacy Guide", "Technology & Systems"),
      "Image Documentation Protocol": createEmptyDoc("Image Documentation Protocol", "Technology & Systems"),
      "System Architecture Documentation": createEmptyDoc("System Architecture Documentation", "Technology & Systems"),
      "API Documentation": createEmptyDoc("API Documentation", "Technology & Systems")
    },
    "Financial Management": {
      "Financial Plan 24": createEmptyDoc("Financial Plan 24", "Financial Management"),
      "Strategic Financial Leverage Plan": createEmptyDoc("Strategic Financial Leverage Plan", "Financial Management"),
      "Strategic Financing Framework": createEmptyDoc("Strategic Financing Framework", "Financial Management"),
      "Year 1 Financial Roadmap": createEmptyDoc("Year 1 Financial Roadmap", "Financial Management"),
      "Capital Expenditures Tracking": createEmptyDoc("Capital Expenditures Tracking", "Financial Management"),
      "Grant Strategy Roadmap": createEmptyDoc("Grant Strategy Roadmap", "Financial Management"),
      "Budget Planning Guide": createEmptyDoc("Budget Planning Guide", "Financial Management"),
      "Revenue Recognition Guidelines": createEmptyDoc("Revenue Recognition Guidelines", "Financial Management")
    },
    "Safety & Risk Management": {
      "Safety Guidelines": createEmptyDoc("Safety Guidelines", "Safety & Risk Management"),
      "Risk Management Plan": createEmptyDoc("Risk Management Plan", "Safety & Risk Management"),
      "Emergency Response Plan": createEmptyDoc("Emergency Response Plan", "Safety & Risk Management"),
      "Business Continuity Plan": createEmptyDoc("Business Continuity Plan", "Safety & Risk Management"),
      "Incident Response Plan": createEmptyDoc("Incident Response Plan", "Safety & Risk Management")
    },
    "Client Experience": {
      "Client Interface Guide": createEmptyDoc("Client Interface Guide", "Client Experience"),
      "Customer Journey Mapping Guide": createEmptyDoc("Customer Journey Mapping Guide", "Client Experience"),
      "Customer Journey Implementation Roadmap": createEmptyDoc("Customer Journey Implementation Roadmap", "Client Experience"),
      "Contract Management Guide": createEmptyDoc("Contract Management Guide", "Client Experience")
    },
    "Marketing & Growth": {
      "Marketing Strategy": createEmptyDoc("Marketing Strategy", "Marketing & Growth"),
      "Marketing Playbook": createEmptyDoc("Marketing Playbook", "Marketing & Growth"),
      "Marketing Playbook2": createEmptyDoc("Marketing Playbook2", "Marketing & Growth"),
      "Competitive Analysis Report": createEmptyDoc("Competitive Analysis Report", "Marketing & Growth")
    },
    "HR & Training": {
      "Employee Handbook": createEmptyDoc("Employee Handbook", "HR & Training"),
      "Training Manual": createEmptyDoc("Training Manual", "HR & Training"),
      "Comprehensive Training Manual": createEmptyDoc("Comprehensive Training Manual", "HR & Training"),
      "Workforce Development Strategy": createEmptyDoc("Workforce Development Strategy", "HR & Training")
    },
    "Compliance & Security": {
      "Information Security Guide": createEmptyDoc("Information Security Guide", "Compliance & Security"),
      "Regulatory Compliance Guide": createEmptyDoc("Regulatory Compliance Guide", "Compliance & Security"),
      "Change Management Procedures": createEmptyDoc("Change Management Procedures", "Compliance & Security")
    },
    "Knowledge Management": {
      "Knowledge Base Management Guide": createEmptyDoc("Knowledge Base Management Guide", "Knowledge Management"),
      "Knowledge Base Structure": createEmptyDoc("Knowledge Base Structure", "Knowledge Management"),
      "Documentation Gap Analysis": createEmptyDoc("Documentation Gap Analysis", "Knowledge Management"),
      "Documentation Review Tracking System": createEmptyDoc("Documentation Review Tracking System", "Knowledge Management"),
      "Docs Reference Verifications": createEmptyDoc("Docs Reference Verifications", "Knowledge Management")
    }
  };

  // Merge the initial structure with actual documents
  const documentStructure = { ...initialDocumentStructure };
  Object.entries(documents).forEach(([title, details]) => {
    if (isDocumentDetails(details)) {
      for (const [category, items] of Object.entries(documentStructure)) {
        if (items.hasOwnProperty(title)) {
          documentStructure[category][title] = details;
          break;
        }
      }
    }
  });

  return (
    <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="p-4">
          <button
            onClick={() => onSelect(null)}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-4"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold">Documentation Home</span>
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      <nav className="px-4 pb-4">
        {Object.entries(documentStructure).map(([category, items]) => (
          <div key={category} className="mb-4">
            <button
              onClick={() => toggleSection(category)}
              className="flex items-center w-full px-2 py-1 text-left text-gray-700 hover:bg-gray-100 rounded"
            >
              {expandedSections[category] ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <span className="font-semibold">{category}</span>
            </button>

            {expandedSections[category] && (
              <div className="ml-4 mt-2 space-y-1">
                {Object.entries(items).map(([name, docDetails]) => (
                  <button
                    key={name}
                    onClick={() => onSelect(name, docDetails)}
                    className={`flex items-center w-full px-2 py-1 text-sm hover:bg-gray-100 rounded ${
                      selectedDoc?.name === name ? 'bg-blue-50 text-blue-700' : 'text-gray-600'
                    }`}
                  >
                    {category === 'Knowledge Management' ? (
                      <LinkIcon className="w-4 h-4 mr-2 flex-shrink-0" />
                    ) : (
                      <FileText className="w-4 h-4 mr-2 flex-shrink-0" />
                    )}
                    <span className="truncate">{name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

// Main document viewer component
const DocumentationViewer: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [documents, setDocuments] = useState<Documents>({});
  const [navigationStack, setNavigationStack] = useState<Document[]>([]);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        // Load and process documents
        // Implementation would depend on your actual document loading mechanism
      } catch (error) {
        console.error('Error loading documents:', error);
      }
    };

    loadDocuments();
  }, []);

  const handleDocumentSelect = (docName: string | null, details?: DocumentDetails) => {
    if (docName === null) {
      setSelectedDoc(null);
      setNavigationStack([]);
      return;
    }
    
    const doc = documents[docName] || details;
    if (doc) {
      setSelectedDoc(doc);
      setNavigationStack(prev => [...prev, doc]);
    }
  };

  const handleBack = () => {
    if (navigationStack.length > 1) {
      const newStack = [...navigationStack];
      newStack.pop();
      const previousDoc = newStack[newStack.length - 1];
      setNavigationStack(newStack);
      setSelectedDoc(previousDoc);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        documents={documents}
        selectedDoc={selectedDoc}
        onSelect={handleDocumentSelect}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <div className="flex-1 overflow-y-auto">
        {selectedDoc ? (
          <div className="max-w-4xl mx-auto px-8 py-12">
            {navigationStack.length > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}
            <div className="prose prose-blue max-w-none">
              <h1>{selectedDoc.name}</h1>
              <div className="whitespace-pre-wrap">{selectedDoc.content}</div>
            </div>
          </div>
        ) : (
          <LandingPage onNavigate={(route) => handleDocumentSelect(route)} />
        )}
      </div>
    </div>
  );
};

export default DocumentationViewer;
