import React, { useState } from 'react';
import { Search, ExternalLink, AlertTriangle, CheckCircle, Clock, Globe } from 'lucide-react';

const SourceChecker = () => {
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sampleSources = [
    {
      url: 'bbc.com/news',
      name: 'BBC News',
      trustScore: 95,
      established: '1922',
      verification: 'verified',
      description: 'British public service broadcaster with high editorial standards'
    },
    {
      url: 'naturalnews.com',
      name: 'Natural News',
      trustScore: 15,
      established: '2003',
      verification: 'questionable',
      description: 'Known for promoting conspiracy theories and pseudoscience'
    },
    {
      url: 'reuters.com',
      name: 'Reuters',
      trustScore: 98,
      established: '1851',
      verification: 'verified',
      description: 'International news agency with strong fact-checking standards'
    }
  ];

  const analyzeSource = (sourceUrl = url) => {
    setIsLoading(true);
    
    
    setTimeout(() => {
      const foundSource = sampleSources.find(s => 
        sourceUrl.toLowerCase().includes(s.url.split('/')[0])
      );
      
      if (foundSource) {
        setAnalysis(foundSource);
      } else {
        setAnalysis({
          url: sourceUrl,
          name: 'Unknown Source',
          trustScore: 50,
          established: 'Unknown',
          verification: 'unverified',
          description: 'This source is not in our database. Please verify manually using our guide.'
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  const getTrustColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getTrustIcon = (score) => {
    if (score >= 80) return CheckCircle;
    if (score >= 60) return Clock;
    return AlertTriangle;
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <Search className="w-5 h-5 text-purple-600" />
          <span>Check a News Source</span>
        </h3>
        
        <div className="flex space-x-3">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (e.g., bbc.com, cnn.com)"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            onClick={() => analyzeSource()}
            disabled={!url || isLoading}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            <Search className="w-4 h-4" />
            <span>{isLoading ? 'Analyzing...' : 'Check'}</span>
          </button>
        </div>
      </div>

      {/* Quick Examples */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">🚀 Try These Examples:</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {sampleSources.map((source, index) => (
            <button
              key={index}
              onClick={() => analyzeSource(source.url)}
              className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all text-left"
            >
              <div className="font-medium text-gray-900">{source.name}</div>
              <div className="text-sm text-gray-500 mt-1">{source.url}</div>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${getTrustColor(source.trustScore)}`}>
                Trust: {source.trustScore}%
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Analysis Results */}
      {analysis && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <Globe className="w-5 h-5 text-blue-600" />
            <span>Source Analysis</span>
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-semibold text-gray-900">{analysis.name}</h4>
                <p className="text-sm text-gray-600">{analysis.url}</p>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getTrustColor(analysis.trustScore)}`}>
                  {React.createElement(getTrustIcon(analysis.trustScore), { className: 'w-4 h-4' })}
                  <span>{analysis.trustScore}% Trust Score</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h5 className="font-medium text-blue-900 mb-2">📅 Established</h5>
                <p className="text-blue-700">{analysis.established}</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h5 className="font-medium text-purple-900 mb-2">✅ Verification Status</h5>
                <p className="text-purple-700 capitalize">{analysis.verification}</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="font-medium text-gray-900 mb-2">📋 Description</h5>
              <p className="text-gray-700">{analysis.description}</p>
            </div>

            {analysis.trustScore < 60 && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center space-x-2 text-red-800 mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-medium">Caution Advised</span>
                </div>
                <p className="text-red-700 text-sm">
                  This source has reliability concerns. Cross-check information with established news outlets.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SourceChecker;