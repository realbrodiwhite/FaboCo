"use client";
import React, { useState } from "react";
import NewComponent from "./components/NewComponent"; // Ensure the correct path

function MainComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeView, setActiveView] = useState("home");
  const [selectedDoc, setSelectedDoc] = useState("overview");

  const renderContent = () => {
    if (activeView === "docs") {
      return (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Documentation</h1>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <button
                  onClick={() => setSelectedDoc("overview")}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    selectedDoc === "overview" ? "bg-gray-100" : ""
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setSelectedDoc("getting-started")}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    selectedDoc === "getting-started" ? "bg-gray-100" : ""
                  }`}
                >
                  Getting Started
                </button>
              </div>
            </div>
            <div className="flex-grow">
              {selectedDoc === "overview" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-gray-600">
                    Welcome to the Property Pride Professional Services
                    documentation.
                  </p>
                </div>
              )}
              {selectedDoc === "getting-started" && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
                  <p className="text-gray-600">
                    Learn how to get started with our services.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Property Pride Professional Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            3PS delivers comprehensive property management and maintenance
            solutions
            <span className="font-semibold">
              {" "}
              for commercial and residential properties{" "}
            </span>
            across the region.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Our Services
            </button>
            <button className="px-6 py-3 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        <section className="mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why Choose 3PS?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
            We bring expertise and dedication to every property we manage.
          </p>
        </section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Property Management</h3>
            <p className="text-gray-600">
              Comprehensive management services for commercial and residential
              properties.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Maintenance Services</h3>
            <p className="text-gray-600">
              Regular maintenance and emergency repairs by skilled
              professionals.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Tenant Relations</h3>
            <p className="text-gray-600">
              Dedicated tenant support and relationship management.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Financial Management</h3>
            <p className="text-gray-600">
              Detailed financial reporting and rent collection services.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">Property Marketing</h3>
            <p className="text-gray-600">
              Strategic marketing to attract and retain quality tenants.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock emergency response and property support.
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <NewComponent
          logoSrc="https://ucarecdn.com/80a69a15-1fb2-4b47-bff9-6af8269987d8/-/format/auto/"
          logoAlt="Property Pride Professional Services Logo"
          activeView={activeView}
          onNavigate={setActiveView}
        />
      </header>
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16 bg-gray-50">
        {renderContent()}
      </main>
    </div>
  );
}

export default MainComponent;
