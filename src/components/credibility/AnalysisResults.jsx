import React from 'react';
import { ExternalLink, Lightbulb, Share2, BookOpen } from 'lucide-react';
import CredibilityScore from '../common/CredibilityScore';
import PlatformBadge from '../common/PlatformBadge';

const AnalysisResults = ({ content, onNewSearch }) => {
  const getLearningTip = (score) => {
    if (score >= 8) {
      return "Great sources! This information appears reliable. Always good to cross-reference with additional sources for important decisions.";
    } else if (score >= 5) {
      return "Mixed signals on this one. Look for peer-reviewed sources and check if the original study supports these conclusions.";
    } else {
      return "Red flags detected! Be especially cautious of dramatic claims without scientific backing. Always verify before sharing.";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Analysis Results</h3>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm">Share Results</span>
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Original Claim */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <PlatformBadge platform={content.platform} />
            <span className="text-sm text-gray-600">Original Claim</span>
          </div>
          <p className="font-medium text-gray-900">"{content.claim}"</p>
          <p className="text-sm text-gray-600 mt-1">Source: {content.originalPost}</p>
        </div>

        {/* Credibility Assessment */}
        <div className="border border-gray-200 rounded-lg p-6">
          <CredibilityScore score={content.credibilityScore} size="lg" />
          <div className="mt-4 bg-gray-50 rounded-lg p-4">
            <h5 className="font-medium text-gray-900 mb-2">Assessment Details:</h5>
            <p className="text-gray-700">{content.explanation}</p>
          </div>
        </div>

        {/* Sources Checked */}
        <div>
          <h5 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            <span>Sources We Checked:</span>
          </h5>
          <div className="space-y-2">
            {content.sources.map((source, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg">
                <ExternalLink className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span className="text-blue-700 text-sm">{source}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Tip */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
          <h5 className="font-medium text-blue-900 mb-2 flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-yellow-500" />
            <span>💡 Media Literacy Tip:</span>
          </h5>
          <p className="text-blue-800 text-sm leading-relaxed">
            {getLearningTip(content.credibilityScore)}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 pt-4">
          <button
            onClick={onNewSearch}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
          >
            Analyze Another Claim
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
            Save Analysis
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;