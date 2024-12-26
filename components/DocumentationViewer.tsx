"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Request } from "next/server";

interface Document {
  name: string;
  content: string;
  kbRefs: string[];
  version: string;
  lastUpdated: string;
  category: string;
  matches?: {
    title: boolean;
    content: boolean;
  };
}

interface DocumentDetails extends Document {
  [key: string]: any;
}

interface Documents {
  [key: string]: DocumentDetails;
}

interface KBStructure {
  [key: string]: Set<string>;
}

interface LandingPageProps {
  onNavigate: (route: string) => void;
}

interface SidebarProps {
  documents: Documents;
  selectedDoc: Document | null;
  onSelect: (docName: string | null, details?: DocumentDetails) => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredDocuments: Documents;
  isSearching: boolean;
}

interface DocumentStructure {
  [category: string]: {
    [docName: string]: DocumentDetails;
  };
}

const DocumentationViewer = () => {
  const documentFiles = [
    "API Documentation.md",
    "Budget Planning Guide.md",
    "Business Continuity Plan.md",
    "Capital Expenditures Tracking.md",
    "Change Management Procedures.md",
    "Client Interface Guide.md",
    "Client Onboarding Guide.md",
    "Competetive Analysis Report.md",
    "Comprehensive Training Manual.md",
    "Contract Management Guide.md",
    "Customer Journey Implementation Roadmap.md",
    "Customer Journey Mapping Guide.md",
    "Data Implementation and Integration Strategy.md",
    "Data Management & Privacy Guide.md",
    "Documentation Review Tracking System.md",
    "Emergency Response Plan.md",
    "Employee Handbook.md",
    "Environmental Management Plan.md",
    "Equipment & Asset Management Guide.md",
    "Executive Summary.md",
    "Financial Plan.md",
    "Grant Strategy Roadmap.md",
    "Image Documentation Protocol.md",
    "Incident Response Plan.md",
    "Information Security Guide.md",
    "Investor Relations.md",
    "Knowledge Base Management Guide.md",
    "Knowledge Base Structure.md",
    "Landscaping Services.md",
    "Marketing Strategy.md",
    "Operations Manual.md",
    "Packout Services.md",
    "Pitch Deck.md",
    "Professional Finishing Services.md",
    "Project Management Methodology Guide.md",
    "Quality Standards.md",
    "Regulatory Compliance Guide.md",
    "Revenue Recognition Guidelines.md",
    "Risk Management Plan.md",
    "Safety Guidelines.md",
    "Service Catalog.md",
    "Service Level Agreements Guide.md",
    "Service Marking and Concrete.md",
    "Standard Operating Procedures Manual.md",
    "Strategic Financial Leverage Plan.md",
    "Strategic Financing Framework.md",
    "System Architecture Documentation.md",
    "Technology Implementation Roadmap.md",
    "Technology Integration Guide.md",
    "Training Manual.md",
    "Vendor and Supplier Management Guide.md",
    "Workforce Development Strategy.md",
    "Year 1 Financial Roadmap.md"
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [documents, setDocuments] = useState<Documents>({});
  const [kbStructure, setKbStructure] = useState<KBStructure>({});
  const [navigationStack, setNavigationStack] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  const filteredDocuments = useMemo(() => {
    if (!searchTerm) return documents;
    
    // Debounce search to avoid too many API calls
    const debounceTimeout = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`);
        const data = await response.json();
        
        if (data.error) {
          console.error('Search error:', data.error);
          return documents;
        }

        const searchResults = data.results.reduce((acc: Documents, doc: DocumentDetails) => {
          acc[doc.name] = {
            ...doc,
            category: determineCategory(doc.name)
          };
          return acc;
        }, {} as Documents);

        setDocuments(prevDocs => ({
          ...prevDocs,
          ...searchResults
        }));
      } catch (error) {
        console.error('Error searching documents:', error);
      } finally {
        setIsSearching(false);
      }
    }, 300); // 300ms debounce

    return Object.entries(documents).reduce((acc, [key, doc]) => {
      if (
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.content.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        acc[key] = doc;
      }
      return acc;
    }, {} as Documents);
  }, [documents, searchTerm]);

  const hasSearchResults = Object.keys(filteredDocuments).length > 0;

  const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
    const featuredDocs = [
      {
        title: "Getting Started",
        icon: "fa-home",
        route: "Executive Summary",
        description: "Overview of our services and company",
      },
      {
        title: "Operations Guide",
        icon: "fa-book",
        route: "Operations Manual",
        description: "Detailed operational procedures and protocols",
      },
      {
        title: "Technology Integration",
        icon: "fa-file-text",
        route: "Technology Integration Guide",
        description: "Explore our Knowledge Multiplication System™",
      },
    ];

    const popularDocs = [
      "Safety Guidelines",
      "Client Interface Guide",
      "Marketing Strategy",
      "Service Catalog",
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
                <i className={`fas ${card.icon} text-blue-600 text-xl`}></i>
                <i className="fas fa-chevron-right text-gray-400 group-hover:text-blue-500"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.description}</p>
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Popular Documentation
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {popularDocs.map((doc) => (
            <button
              key={doc}
              onClick={() => onNavigate(doc)}
              className="flex items-center w-full p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 group"
            >
              <i className="fas fa-file-text text-gray-400 group-hover:text-blue-500 mr-3"></i>
              <span className="text-gray-700 group-hover:text-gray-900">
                {doc}
              </span>
              <i className="fas fa-chevron-right text-gray-400 group-hover:text-blue-500 ml-auto"></i>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const Sidebar: React.FC<SidebarProps> = ({
    documents,
    selectedDoc,
    onSelect,
    searchTerm,
    onSearchChange,
    filteredDocuments,
    isSearching,
  }) => {
    const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
    
    // Automatically expand all sections when searching
    useEffect(() => {
      const allCategories = [
        "Getting Started",
        "Operations",
        "Technology",
        "Financial",
        "Marketing",
        "Risk & Safety",
        "HR & Personnel",
        "Quality Standards",
        "Client Services",
        "General",
        "Knowledge Base",
      ];

      if (searchTerm) {
        // Expand all sections when searching
        const expandAll = allCategories.reduce((acc, category) => {
          acc[category] = true;
          return acc;
        }, {} as {[key: string]: boolean});
        setExpandedSections(expandAll);
      } else {
        // Reset to default state when search is cleared
        const defaultState = allCategories.reduce((acc, category) => {
          acc[category] = false;
          return acc;
        }, {} as {[key: string]: boolean});
        setExpandedSections(defaultState);
      }
    }, [searchTerm]);

    const documentStructure: DocumentStructure = {
      "Getting Started": {},
      Operations: {},
      Technology: {},
      Financial: {},
      Marketing: {},
      "Risk & Safety": {},
      "HR & Personnel": {},
      "Quality Standards": {},
      "Client Services": {},
      General: {},
      "Knowledge Base": {},
    };

    // Organize documents into categories
    Object.entries(filteredDocuments).forEach(([title, details]) => {
      if (isDocumentDetails(details) && details.category && documentStructure[details.category]) {
        documentStructure[details.category][title] = details;
      }
    });

    const hasDocuments = Object.values(documentStructure).some(
      (category) => Object.keys(category).length > 0
    );

    const toggleSection = (section: string) => {
      if (searchTerm) return; // Prevent collapsing sections during search
      setExpandedSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    };

    return (
      <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
          <div className="p-4">
            <button
              onClick={() => onSelect(null)}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 mb-4"
            >
              <i className="fas fa-home w-5 h-5"></i>
              <span className="font-semibold">Documentation Home</span>
            </button>
            <div className="relative">
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={onSearchChange}
              />
              {isSearching && (
                <div className="absolute right-3 top-3">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <nav className="px-4 pb-4">
          {!hasDocuments && searchTerm && (
            <div className="text-gray-600 text-center py-4">
              No documents found matching "{searchTerm}"
            </div>
          )}
          {Object.entries(documentStructure).map(([category, items]) => {
            const hasItems = Object.keys(items).length > 0;
            if (!hasItems && searchTerm) return null;
            
            return (
              <div key={category} className="mb-4">
                <button
                  onClick={() => toggleSection(category)}
                  className="flex items-center w-full px-2 py-1 text-left text-gray-700 hover:bg-gray-100 rounded"
                >
                  <i
                    className={`fas fa-chevron-${
                      expandedSections[category] ? "down" : "right"
                    } w-4 h-4 mr-2`}
                  ></i>
                  <span className="font-semibold">{category}</span>
                  {hasItems && searchTerm && (
                    <span className="ml-2 text-sm text-gray-500">
                      ({Object.keys(items).length})
                    </span>
                  )}
                </button>

                {(expandedSections[category] || searchTerm) && hasItems && (
                  <div className="ml-4 mt-2 space-y-1">
                    {Object.entries(items).map(([name, details]) => (
                      <button
                        key={name}
                        onClick={() => onSelect(name, details)}
                        className={`flex items-center w-full px-2 py-1 text-sm hover:bg-gray-100 rounded ${
                          selectedDoc?.name === name
                            ? "bg-blue-50 text-blue-700"
                            : "text-gray-600"
                        }`}
                      >
                        <i
                          className={`fas ${
                            category === "Knowledge Base"
                              ? "fa-link"
                              : "fa-file-text"
                          } w-4 h-4 mr-2 flex-shrink-0`}
                        ></i>
                        <span className="truncate">{name}</span>
                        {details.matches && (
                          <span className="ml-2 text-xs text-gray-500">
                            {details.matches.title ? "title" : "content"}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    );
  };

  const isDocumentDetails = (obj: any): obj is DocumentDetails => {
    return (
      obj &&
      typeof obj.name === 'string' &&
      typeof obj.content === 'string' &&
      Array.isArray(obj.kbRefs) &&
      typeof obj.version === 'string' &&
      typeof obj.lastUpdated === 'string' &&
      typeof obj.category === 'string'
    );
  };

  useEffect(() => {
    const loadDocuments = async () => {
      setIsLoading(true);
      try {
        const processedDocs: Documents = {};
        const kbRefs: KBStructure = {};

        for (const fileName of documentFiles) {
          try {
            const response = await fetch(`/api/documents?file=${encodeURIComponent(fileName)}`);
            const data = await response.json();
            
            if (data.error) {
              console.error(`Error loading ${fileName}:`, data.error);
              continue;
            }

            const content = data.content;
            const docName = fileName.replace('.md', '');
            const kbMatches = content.match(/KB-\d{3}(-\d{2})?/g) || [];
            const uniqueKBRefs = Array.from(new Set(kbMatches)) as string[];
            const version = content.match(/Version: ([\d.]+)/)?.[1] || "1.0.0";
            const lastUpdated =
              content.match(/Last Updated: ([\d-]+)/)?.[1] || "Unknown";

            processedDocs[docName] = {
              name: docName,
              content,
              kbRefs: uniqueKBRefs,
              version,
              lastUpdated,
              category: determineCategory(docName),
            };

            uniqueKBRefs.forEach((ref: string) => {
              if (!kbRefs[ref]) kbRefs[ref] = new Set<string>();
              kbRefs[ref].add(docName);
            });
          } catch (error) {
            console.error(`Error loading document ${fileName}:`, error);
          }
        }

        setDocuments(processedDocs);
        setKbStructure(kbRefs);
      } catch (error) {
        console.error("Error loading documents:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDocuments();
  }, []);

  const handleDocumentSelect = (docName: string | null, details: DocumentDetails = {} as DocumentDetails) => {
    if (!docName) {
      setSelectedDoc(null);
      setNavigationStack([]);
      return;
    }
    const doc = documents[docName] || { ...details, name: docName };
    setSelectedDoc(doc);
    setNavigationStack((prev) => [...prev, doc]);
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

  const determineCategory = (title: string): string => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("executive summary")) return "Getting Started";
    if (lowerTitle.includes("operations")) return "Operations";
    if (lowerTitle.includes("technology")) return "Technology";
    if (lowerTitle.includes("financial")) return "Financial";
    if (lowerTitle.includes("marketing")) return "Marketing";
    if (lowerTitle.includes("risk") || lowerTitle.includes("safety"))
      return "Risk & Safety";
    if (lowerTitle.includes("employee") || lowerTitle.includes("hr"))
      return "HR & Personnel";
    if (lowerTitle.includes("quality")) return "Quality Standards";
    if (lowerTitle.includes("client")) return "Client Services";
    return "General";
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        documents={documents}
        selectedDoc={selectedDoc}
        onSelect={handleDocumentSelect}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        filteredDocuments={filteredDocuments}
        isSearching={isSearching}
      />
      <div className="flex-1 overflow-y-auto">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
              <p className="text-gray-600">Loading documentation...</p>
            </div>
          </div>
        ) : selectedDoc ? (
          <div className="max-w-4xl mx-auto px-8 py-12">
            {navigationStack.length > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
              >
                <i className="fas fa-arrow-left w-4 h-4"></i>
                <span>Back</span>
              </button>
            )}
            <div className="prose prose-blue max-w-none">
              <h1>{selectedDoc.name}</h1>
              <div className="whitespace-pre-wrap">{selectedDoc.content}</div>
            </div>
          </div>
        ) : (
          <LandingPage onNavigate={handleDocumentSelect} />
        )}
      </div>
    </div>
  );
};

export default DocumentationViewer;
