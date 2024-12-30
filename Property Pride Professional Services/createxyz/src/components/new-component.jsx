"use client";
import React from "react";

function NewComponent({
  logoSrc,
  logoAlt,
  activeView,
  onNavigate,
  isUserAuthenticated,
}) {
  return (
    <nav className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
        <img src={logoSrc} alt={logoAlt} className="h-8 md:h-12" />
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => onNavigate("home")}
            className={`text-gray-600 hover:text-black transition-colors ${
              activeView === "home" ? "font-bold" : ""
            }`}
          >
            Services
          </button>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Properties
          </a>
          <button
            onClick={() => onNavigate("docs")}
            className={`text-gray-600 hover:text-black transition-colors ${
              activeView === "docs" ? "font-bold" : ""
            }`}
          >
            Docs
          </button>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {!isUserAuthenticated ? (
          <a
            href="/account/signin"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Sign In
          </a>
        ) : (
          <a
            href="/account/logout"
            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Sign Out
          </a>
        )}
      </div>
    </nav>
  );
}

function NewComponentStory() {
  const handleNavigation = (view) => {
    console.log(`Navigate to ${view}`);
  };

  return (
    <div>
      <NewComponent
        logoSrc="https://ucarecdn.com/80a69a15-1fb2-4b47-bff9-6af8269987d8/-/format/auto/"
        logoAlt="Property Pride Professional Services Logo"
        activeView="home"
        onNavigate={handleNavigation}
        isUserAuthenticated={false}
      />
      <NewComponent
        logoSrc="https://ucarecdn.com/80a69a15-1fb2-4b47-bff9-6af8269987d8/-/format/auto/"
        logoAlt="Property Pride Professional Services Logo"
        activeView="docs"
        onNavigate={handleNavigation}
        isUserAuthenticated={true}
      />
    </div>
  );
}

export default NewComponent;