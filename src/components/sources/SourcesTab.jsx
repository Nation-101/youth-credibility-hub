import React, { useState } from 'react';
import { Search, ExternalLink, AlertTriangle, CheckCircle } from 'lucide-react';
import SourceChecker from './SourceChecker';
import SourceDatabase from './SourceDatabase';
import VerificationGuide from './VerificationGuide';

const SourcesTab = () => {
  const [activeView, setActiveView] = useState('checker');

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-2">📚 Source Verification Center</h2>
        <p className="text-blue-100">
          Learn to identify trustworthy sources and spot fake news websites
        </p>
      </div>

      {/* Sub-navigation */}
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
        <button
          onClick={() => setActiveView('checker')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            activeView === 'checker'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          🔍 Source Checker
        </button>
        <button
          onClick={() => setActiveView('database')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            activeView === 'database'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          📊 Source Database
        </button>
        <button
          onClick={() => setActiveView('guide')}
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
            activeView === 'guide'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-purple-600'
          }`}
        >
          📖 Verification Guide
        </button>
      </div>

      {/* Content Area */}
      <div className="min-h-96">
        {activeView === 'checker' && <SourceChecker />}
        {activeView === 'database' && <SourceDatabase />}
        {activeView === 'guide' && <VerificationGuide />}
      </div>
    </div>
  );
};

export default SourcesTab;