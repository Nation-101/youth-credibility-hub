import React, { useState } from 'react';
import { Search, Zap, ArrowLeft } from 'lucide-react';
import LoadingSpinner from '../common/LoadingSpinner';

const ClaimAnalyzer = ({ onAnalyze, isAnalyzing, onNewSearch, hasResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Create a custom claim object for user input
      const userClaim = {
        id: Date.now(),
        platform: 'User Input',
        claim: searchQuery,
        credibilityScore: Math.floor(Math.random() * 10) + 1, // Random for demo
        sources: ['Analyzing...', 'Checking sources...'],
        explanation: 'Analyzing your claim against our database of reliable sources...',
        verified: false,
        category: 'User Submitted',
        originalPost: 'Direct Input',
        datePosted: new Date().toISOString().split('T')[0]
      };
      onAnalyze(userClaim);
      setSearchQuery('');
    }
  };

  if (hasResults) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
        <button
          onClick={onNewSearch}
          className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Analyze Another Claim</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Paste a claim from TikTok, Instagram, Facebook, or any social platform..."
            className="w-full pl-12 pr-24 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            disabled={isAnalyzing}
          />
          <button
            type="submit"
            disabled={isAnalyzing || !searchQuery.trim()}
            className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isAnalyzing ? (
              <>
                <LoadingSpinner size="sm" color="purple" />
                <span>Analyzing...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>Analyze</span>
              </>
            )}
          </button>
        </div>
      </form>

      {isAnalyzing && (
        <div className="mt-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <LoadingSpinner size="md" color="purple" />
            <div>
              <p className="font-medium text-purple-900">Analyzing your claim...</p>
              <p className="text-sm text-purple-700">
                Checking sources, verifying facts, and assessing credibility
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClaimAnalyzer;