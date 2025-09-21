import React, { useState } from 'react';
import ClaimAnalyzer from './ClaimAnalyzer';
import AnalysisResults from './AnalysisResults';
import SampleClaims from './SampleClaims';

const CredibilityTab = () => {
  const [analyzedContent, setAnalyzedContent] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyzeContent = (claim) => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setAnalyzedContent(claim);
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleNewSearch = () => {
    setAnalyzedContent(null);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Learn to Navigate Information Like a Pro
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Paste any claim from social media and we'll help you understand its credibility. 
          Build your media literacy skills while you scroll!
        </p>
      </div>

      {/* Claim Analyzer */}
      <ClaimAnalyzer 
        onAnalyze={handleAnalyzeContent} 
        isAnalyzing={isAnalyzing}
        onNewSearch={handleNewSearch}
        hasResults={!!analyzedContent}
      />

      {/* Analysis Results */}
      {analyzedContent && (
        <AnalysisResults 
          content={analyzedContent} 
          onNewSearch={handleNewSearch}
        />
      )}

      {/* Sample Claims (only show if no analysis results) */}
      {!analyzedContent && (
        <SampleClaims onAnalyze={handleAnalyzeContent} />
      )}
    </div>
  );
};

export default CredibilityTab;