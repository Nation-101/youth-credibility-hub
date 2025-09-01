import React, { useState } from 'react';
import { Search, Filter, CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const SourceDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const sourcesData = [
    { name: 'Associated Press', url: 'ap.org', category: 'news', trustScore: 97, verification: 'verified', bias: 'center' },
    { name: 'Reuters', url: 'reuters.com', category: 'news', trustScore: 98, verification: 'verified', bias: 'center' },
    { name: 'BBC News', url: 'bbc.com/news', category: 'news', trustScore: 95, verification: 'verified', bias: 'center-left' },
    { name: 'NPR', url: 'npr.org', category: 'news', trustScore: 92, verification: 'verified', bias: 'center-left' },
    { name: 'Wall Street Journal', url: 'wsj.com', category: 'news', trustScore: 89, verification: 'verified', bias: 'center-right' },
    { name: 'Infowars', url: 'infowars.com', category: 'conspiracy', trustScore: 12, verification: 'questionable', bias: 'extreme-right' },
    { name: 'Natural News', url: 'naturalnews.com', category: 'pseudoscience', trustScore: 15, verification: 'questionable', bias: 'right' },
    { name: 'The Onion', url: 'theonion.com', category: 'satire', trustScore: 85, verification: 'satirical', bias: 'center' },
    { name: 'Snopes', url: 'snopes.com', category: 'fact-check', trustScore: 91, verification: 'verified', bias: 'center' },
    { name: 'PolitiFact', url: 'politifact.com', category: 'fact-check', trustScore: 88, verification: 'verified', bias: 'center-left' }
  ];

  const filteredSources = sourcesData.filter(source => {
    const matchesSearch = source.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         source.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || source.category === filterType;
    return matchesSearch && matchesFilter;
  });

  const getVerificationIcon = (verification) => {
    switch (verification) {
      case 'verified': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'questionable': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'satirical': return <Clock className="w-4 h-4 text-yellow-600" />;
      default: return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTrustScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search news sources..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">All Categories</option>
            <option value="news">News</option>
            <option value="fact-check">Fact Checkers</option>
            <option value="conspiracy">Conspiracy</option>
            <option value="pseudoscience">Pseudoscience</option>
            <option value="satire">Satire</option>
          </select>
        </div>
      </div>

      {/* Sources List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Source Database ({filteredSources.length} sources)</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {filteredSources.map((source, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getVerificationIcon(source.verification)}
                    <h4 className="font-semibold text-gray-900">{source.name}</h4>
                    <span className="text-sm text-gray-500">({source.url})</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 cursor-pointer hover:text-purple-600" />
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className={`px-2 py-1 rounded-full font-medium ${getTrustScoreColor(source.trustScore)}`}>
                      Trust: {source.trustScore}%
                    </span>
                    <span className="text-gray-600">Category: {source.category}</span>
                    <span className="text-gray-600">Bias: {source.bias}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceDatabase;