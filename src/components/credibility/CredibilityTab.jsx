import React, { useState, useEffect } from 'react';
import { Search, Zap, ArrowLeft, History, TrendingUp, AlertCircle, CheckCircle, XCircle, Eye, Share2, Bookmark, Download, Filter, Clock, Globe, Users, BarChart3, Sparkles, Shield, Target, Brain, Lightbulb } from 'lucide-react';

const CredibilityTab = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [analyzedContent, setAnalyzedContent] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisHistory, setAnalysisHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Enhanced sample data with more realistic examples
  const sampleClaims = [
    {
      id: 1,
      platform: 'TikTok',
      claim: "Drinking lemon water every morning will cure diabetes completely",
      credibilityScore: 2,
      sources: ['Mayo Clinic', 'Diabetes.org.za', 'Medical Research Council SA'],
      explanation: 'This claim is medically dangerous. While lemon water has health benefits, it cannot cure diabetes. Always consult healthcare professionals for diabetes management.',
      verified: false,
      category: 'Health Misinformation',
      originalPost: '@healthguru_sa - 2.3M views',
      datePosted: '2024-08-15',
      analysisType: 'Medical Claim',
      riskLevel: 'High',
      biasScore: 8,
      sourceReliability: 9
    },
    {
      id: 2,
      platform: 'Instagram',
      claim: "New government grant of R50,000 available for all South Africans aged 18-35",
      credibilityScore: 3,
      sources: ['SASSA Official', 'Gov.za', 'National Treasury'],
      explanation: 'This appears to be a scam. No such universal grant exists. Always verify government programs through official channels.',
      verified: false,
      category: 'Financial Scam',
      originalPost: '@grant_helper_sa',
      datePosted: '2024-08-20',
      analysisType: 'Government Claim',
      riskLevel: 'High',
      biasScore: 9,
      sourceReliability: 9
    },
    {
      id: 3,
      platform: 'Facebook',
      claim: "Load shedding will end permanently by December 2024 according to Eskom CEO",
      credibilityScore: 6,
      sources: ['Eskom Official', 'News24', 'BusinessDay', 'Engineering News'],
      explanation: 'Partially accurate. Eskom has made optimistic projections, but energy experts suggest the timeline may be unrealistic given current infrastructure challenges.',
      verified: true,
      category: 'Infrastructure News',
      originalPost: 'SA Energy News',
      datePosted: '2024-08-10',
      analysisType: 'Infrastructure Claim',
      riskLevel: 'Medium',
      biasScore: 4,
      sourceReliability: 7
    }
  ];

  // Auto-detect platform from URL or content
  const detectPlatform = (text) => {
    if (text.includes('tiktok.com') || text.includes('@') && text.includes('views')) return 'TikTok';
    if (text.includes('instagram.com') || text.includes('instagram')) return 'Instagram';
    if (text.includes('facebook.com') || text.includes('fb.com')) return 'Facebook';
    if (text.includes('twitter.com') || text.includes('x.com')) return 'Twitter';
    if (text.includes('youtube.com') || text.includes('youtu.be')) return 'YouTube';
    return 'Unknown Platform';
  };

  const analyzeContent = (text) => {
    const platform = detectPlatform(text);
    
    // Enhanced analysis simulation
    const analysisTypes = ['Medical Claim', 'Financial Claim', 'Government Claim', 'Science Claim', 'Social Issue'];
    const categories = ['Health Misinformation', 'Financial Scam', 'Political Claim', 'Science News', 'Social Media Trend'];
    const riskLevels = ['Low', 'Medium', 'High'];
    
    return {
      id: Date.now(),
      platform: platform,
      claim: text,
      credibilityScore: Math.floor(Math.random() * 10) + 1,
      sources: ['Checking factcheck.org.za', 'Verifying with Africa Check', 'Cross-referencing news sources'],
      explanation: 'Analyzing claim against verified sources and expert databases...',
      verified: Math.random() > 0.5,
      category: categories[Math.floor(Math.random() * categories.length)],
      originalPost: 'User Submitted',
      datePosted: new Date().toISOString().split('T')[0],
      analysisType: analysisTypes[Math.floor(Math.random() * analysisTypes.length)],
      riskLevel: riskLevels[Math.floor(Math.random() * riskLevels.length)],
      biasScore: Math.floor(Math.random() * 10) + 1,
      sourceReliability: Math.floor(Math.random() * 10) + 1,
      timestamp: new Date()
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsAnalyzing(true);
      
      setTimeout(() => {
        const analysis = analyzeContent(searchQuery);
        setAnalyzedContent(analysis);
        setAnalysisHistory(prev => [analysis, ...prev]);
        setIsAnalyzing(false);
        setSearchQuery('');
      }, 2000);
    }
  };

  const handleSampleAnalyze = (claim) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      const enhancedClaim = { ...claim, timestamp: new Date() };
      setAnalyzedContent(enhancedClaim);
      setAnalysisHistory(prev => [enhancedClaim, ...prev]);
      setIsAnalyzing(false);
    }, 1500);
  };

  const handleNewSearch = () => {
    setAnalyzedContent(null);
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getCredibilityColor = (score) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCredibilityIcon = (score) => {
    if (score >= 8) return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (score >= 5) return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    return <XCircle className="w-5 h-5 text-red-600" />;
  };

  const getPlatformColor = (platform) => {
    switch (platform.toLowerCase()) {
      case 'tiktok': return 'bg-gradient-to-r from-gray-900 to-black text-white shadow-lg';
      case 'instagram': return 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg';
      case 'facebook': return 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg';
      case 'twitter': return 'bg-gradient-to-r from-sky-400 to-sky-600 text-white shadow-lg';
      case 'youtube': return 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg';
    }
  };

  const filteredHistory = analysisHistory.filter(item => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'high-risk') return item.riskLevel === 'High';
    if (selectedFilter === 'low-credibility') return item.credibilityScore < 5;
    if (selectedFilter === 'recent') return new Date() - new Date(item.timestamp) < 24 * 60 * 60 * 1000;
    return true;
  });

  if (showHistory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-sky-50 to-cyan-50">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-25 animate-pulse"></div>
              <div className="relative">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  Analysis History
                </h2>
                <p className="text-gray-600 text-lg">Review your fact-checking journey</p>
              </div>
            </div>
            <button
              onClick={() => setShowHistory(false)}
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/25 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center space-x-2">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Analyzer</span>
              </div>
            </button>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { value: analysisHistory.length, label: 'Total Analyses', color: 'from-violet-500 to-purple-600', icon: BarChart3 },
              { value: analysisHistory.filter(item => item.riskLevel === 'High').length, label: 'High Risk Claims', color: 'from-red-500 to-pink-600', icon: AlertCircle },
              { value: analysisHistory.filter(item => item.credibilityScore >= 8).length, label: 'Highly Credible', color: 'from-emerald-500 to-green-600', icon: CheckCircle },
              { value: new Set(analysisHistory.map(item => item.platform)).size, label: 'Platforms Analyzed', color: 'from-blue-500 to-cyan-600', icon: Globe }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r opacity-25 rounded-2xl blur group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced History Filters */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Filter className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-gray-900">Filter History</span>
                </div>
                <button className="group flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Export Data</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { key: 'all', label: 'All', icon: Target },
                  { key: 'high-risk', label: 'High Risk', icon: AlertCircle },
                  { key: 'low-credibility', label: 'Low Credibility', icon: XCircle },
                  { key: 'recent', label: 'Last 24h', icon: Clock }
                ].map(filter => (
                  <button
                    key={filter.key}
                    onClick={() => setSelectedFilter(filter.key)}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedFilter === filter.key
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    <span>{filter.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Beautiful History List */}
          <div className="space-y-6">
            {filteredHistory.map((item, index) => (
              <div key={item.id} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className={`px-4 py-2 rounded-xl text-sm font-bold ${getPlatformColor(item.platform)}`}>
                        {item.platform}
                      </span>
                      <span className={`px-3 py-2 rounded-xl border-2 text-sm font-bold ${getRiskColor(item.riskLevel)}`}>
                        {item.riskLevel} Risk
                      </span>
                      <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-xl border">
                        {getCredibilityIcon(item.credibilityScore)}
                        <span className={`text-sm font-bold ${getCredibilityColor(item.credibilityScore)}`}>
                          {item.credibilityScore}/10
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{new Date(item.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-900 font-semibold text-lg mb-3 leading-relaxed">"{item.claim}"</p>
                    <p className="text-gray-600 leading-relaxed">{item.explanation}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 font-medium">Category: {item.category}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="text-sm text-gray-500 font-medium">{item.analysisType}</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="group flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors">
                        <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">View Details</span>
                      </button>
                      <button className="group flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors">
                        <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredHistory.length === 0 && (
            <div className="text-center py-20">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full blur opacity-25 animate-pulse"></div>
                <div className="relative w-24 h-24 bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                  <History className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No analysis history yet</h3>
              <p className="text-gray-600 text-lg">Start analyzing claims to build your fact-checking history!</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (analyzedContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-sky-50 to-cyan-50">
        <div className="space-y-8">
          <button
            onClick={handleNewSearch}
            className="group flex items-center space-x-2 text-violet-600 hover:text-violet-700 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Analyze Another Claim</span>
          </button>

          {/* Main Results Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-25 animate-pulse"></div>
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
              
              {/* Header with floating elements */}
              <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-8">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full animate-bounce delay-100"></div>
                  <div className="absolute top-8 right-12 w-4 h-4 bg-white rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-6 left-1/3 w-6 h-6 bg-white rounded-full animate-bounce delay-500"></div>
                </div>
                <div className="relative flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 flex items-center space-x-3">
                      <Sparkles className="w-8 h-8" />
                      <span>Analysis Complete</span>
                    </h3>
                    <p className="text-violet-100 text-lg">AI-powered fact-checking results</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="group bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
                      <Bookmark className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                    <button className="group bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/30 hover:scale-105">
                      <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Original Claim with beautiful styling */}
                <div className="relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl blur opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`px-4 py-2 rounded-xl text-sm font-bold ${getPlatformColor(analyzedContent.platform)}`}>
                        {analyzedContent.platform}
                      </span>
                      <span className="text-gray-500 font-medium">Original Claim</span>
                    </div>
                    <blockquote className="text-xl font-semibold text-gray-900 mb-3 leading-relaxed italic">
                      "{analyzedContent.claim}"
                    </blockquote>
                    <p className="text-gray-600">Source: {analyzedContent.originalPost}</p>
                  </div>
                </div>

                {/* Enhanced Analysis Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    {
                      title: 'Credibility Score',
                      value: `${analyzedContent.credibilityScore}/10`,
                      subtitle: analyzedContent.credibilityScore >= 8 ? 'Highly Credible' : 
                               analyzedContent.credibilityScore >= 5 ? 'Needs Verification' : 'Not Credible',
                      icon: getCredibilityIcon(analyzedContent.credibilityScore),
                      gradient: 'from-emerald-500 to-green-600',
                      bgGradient: 'from-emerald-50 to-green-50'
                    },
                    {
                      title: 'Risk Level',
                      value: analyzedContent.riskLevel,
                      subtitle: 'Misinformation Risk',
                      icon: <AlertCircle className={`w-6 h-6 ${
                        analyzedContent.riskLevel === 'High' ? 'text-red-500' :
                        analyzedContent.riskLevel === 'Medium' ? 'text-yellow-500' : 'text-green-500'
                      }`} />,
                      gradient: analyzedContent.riskLevel === 'High' ? 'from-red-500 to-pink-600' :
                               analyzedContent.riskLevel === 'Medium' ? 'from-yellow-500 to-orange-600' : 'from-green-500 to-emerald-600',
                      bgGradient: analyzedContent.riskLevel === 'High' ? 'from-red-50 to-pink-50' :
                                 analyzedContent.riskLevel === 'Medium' ? 'from-yellow-50 to-orange-50' : 'from-green-50 to-emerald-50'
                    },
                    {
                      title: 'Bias Detection',
                      value: `${analyzedContent.biasScore}/10`,
                      subtitle: 'Bias Score',
                      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
                      gradient: 'from-blue-500 to-cyan-600',
                      bgGradient: 'from-blue-50 to-cyan-50'
                    }
                  ].map((metric, index) => (
                    <div key={index} className="group relative">
                      <div className={`absolute -inset-1 bg-gradient-to-r ${metric.gradient} rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000`}></div>
                      <div className={`relative bg-gradient-to-br ${metric.bgGradient} rounded-2xl p-6 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300`}>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-gray-700 font-semibold">{metric.title}</span>
                          <div className={`w-12 h-12 bg-gradient-to-r ${metric.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                            {metric.icon}
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                        <div className="text-gray-600 font-medium">{metric.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Detailed Explanation with gorgeous styling */}
                <div className="relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25"></div>
                  <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-200 shadow-xl">
                    <h5 className="text-xl font-bold text-indigo-900 mb-4 flex items-center space-x-2">
                      <Brain className="w-6 h-6" />
                      <span>Detailed Assessment</span>
                    </h5>
                    <p className="text-indigo-800 text-lg leading-relaxed mb-6">{analyzedContent.explanation}</p>
                    
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-indigo-200">
                      <h6 className="font-bold text-indigo-900 mb-4 flex items-center text-lg">
                        <Shield className="w-5 h-5 mr-3" />
                        Sources Verified:
                      </h6>
                      <div className="space-y-3">
                        {analyzedContent.sources.map((source, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                            <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                            <span className="text-emerald-800 font-medium">{source}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Educational Content with stunning visuals */}
                <div className="relative mb-8">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-2xl blur opacity-25 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200 shadow-xl">
                    <h5 className="text-xl font-bold text-orange-900 mb-4 flex items-center space-x-2">
                      <Lightbulb className="w-6 h-6 text-yellow-600" />
                      <span>💡 Media Literacy Tip</span>
                    </h5>
                    <p className="text-orange-800 text-lg leading-relaxed">
                      {analyzedContent.riskLevel === 'High' 
                        ? "🚨 This claim shows red flags typical of misinformation. Always cross-check dramatic health or financial claims with official sources before believing or sharing."
                        : analyzedContent.credibilityScore >= 8
                        ? "✅ This information appears reliable, but it's always good practice to verify important claims with multiple credible sources."
                        : "⚠️ Mixed signals on this claim suggest you should look deeper. Check the original sources and see if peer-reviewed research supports the conclusions."}
                    </p>
                  </div>
                </div>

                {/* Action buttons with beautiful hover effects */}
                <div className="flex space-x-4 pt-6">
                  <button
                    onClick={handleNewSearch}
                    className="group relative overflow-hidden flex-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center justify-center space-x-2">
                      <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                      <span>Analyze Another Claim</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setShowHistory(true)}
                    className="group px-8 py-4 bg-white border-2 border-gray-300 rounded-2xl text-gray-700 hover:border-violet-500 hover:bg-violet-50 transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
                  >
                    <History className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-bold">View History</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-sky-50 to-cyan-50 relative overflow-hidden">
      {/* Beautiful background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative space-y-12 pt-8">
        {/* Hero Section with stunning visuals */}
        <div className="text-center relative">
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <h1 className="relative text-6xl font-black bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              AI Fact Checker
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            🚀 Paste any claim from social media and get instant credibility analysis. 
            Build your media literacy skills and fight misinformation with AI!
          </p>
        </div>

        {/* Stunning stats with animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { value: '10,000+', label: 'Claims Analyzed', gradient: 'from-violet-500 to-purple-600', icon: BarChart3 },
            { value: '89%', label: 'Accuracy Rate', gradient: 'from-emerald-500 to-green-600', icon: Target },
            { value: '500+', label: 'Daily Users', gradient: 'from-orange-500 to-red-600', icon: Users }
          ].map((stat, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200`}></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 group-hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} mb-6 shadow-xl group-hover:rotate-6 transition-transform`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-bold text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Search Interface */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-30 animate-pulse"></div>
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <span>Fact-Check Assistant</span>
                </h3>
                <p className="text-gray-600 mt-2">Powered by advanced AI and trusted sources</p>
              </div>
              <button
                onClick={() => setShowHistory(true)}
                className="group flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 rounded-xl text-gray-700 hover:from-violet-100 hover:to-purple-100 hover:text-violet-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <History className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">History ({analysisHistory.length})</span>
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-6 flex items-center">
                  <Search className="w-6 h-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="🔍 Paste a claim from TikTok, Instagram, Facebook, WhatsApp, or any platform..."
                  className="w-full pl-16 pr-32 py-6 text-xl bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300 font-medium placeholder-gray-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  disabled={isAnalyzing}
                />
                <button
                  type="submit"
                  disabled={isAnalyzing || !searchQuery.trim()}
                  className="absolute right-3 top-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 hover:scale-105"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      <span>Check Facts</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {isAnalyzing && (
              <div className="mt-8 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl blur opacity-25"></div>
                <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-violet-200 rounded-2xl p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-8 w-8 border-4 border-violet-600 border-t-transparent"></div>
                      <div className="absolute inset-0 animate-ping rounded-full h-8 w-8 border-4 border-violet-400 border-t-transparent opacity-20"></div>
                    </div>
                    <div>
                      <p className="font-bold text-violet-900 text-lg">🔍 Analyzing your claim...</p>
                      <p className="text-violet-700 font-medium">
                        Cross-referencing with trusted sources, checking for bias, and assessing credibility...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sample Claims with gorgeous cards */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">✨ Try These Examples</h3>
            <p className="text-gray-600 text-lg">Click any claim below to see our AI in action</p>
          </div>
          
          <div className="grid gap-8">
            {sampleClaims.map((claim, index) => (
              <div
                key={claim.id}
                className="group relative cursor-pointer"
                onClick={() => handleSampleAnalyze(claim)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/50 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <span className={`px-4 py-2 rounded-xl text-sm font-bold ${getPlatformColor(claim.platform)}`}>
                          {claim.platform}
                        </span>
                        <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-xl border-2 border-gray-200">
                          {getCredibilityIcon(claim.credibilityScore)}
                          <span className={`text-sm font-bold ${getCredibilityColor(claim.credibilityScore)}`}>
                            {claim.credibilityScore}/10
                          </span>
                        </div>
                        <span className={`px-3 py-2 rounded-xl border-2 text-sm font-bold ${getRiskColor(claim.riskLevel)}`}>
                          {claim.riskLevel} Risk
                        </span>
                      </div>
                      
                      <blockquote className="text-xl font-semibold text-gray-900 mb-4 leading-relaxed italic">
                        "{claim.claim}"
                      </blockquote>
                      
                      <p className="text-gray-600 font-medium mb-4">From: {claim.originalPost}</p>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500 font-medium">
                        <span>📂 Category: {claim.category}</span>
                        <span>•</span>
                        <span>📅 {claim.datePosted}</span>
                        <span>•</span>
                        <span>🔬 {claim.analysisType}</span>
                      </div>
                    </div>
                    
                    <div className="ml-8">
                      <div className="group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 bg-gradient-to-r from-violet-500 to-purple-600 p-4 rounded-2xl shadow-xl">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Footer with stunning design */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-30 animate-pulse"></div>
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-10">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50 animate-pulse"></div>
                <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🧠 Building Media Literacy Skills</h3>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                Every analysis helps you become better at spotting misinformation. Learn the patterns, 
                understand the sources, and become a more informed digital citizen in South Africa.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: CheckCircle, text: 'Verify Sources', color: 'from-emerald-500 to-green-600' },
                  { icon: AlertCircle, text: 'Check Bias', color: 'from-yellow-500 to-orange-600' },
                  { icon: Users, text: 'Cross-Reference', color: 'from-blue-500 to-cyan-600' }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} mb-3 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 text-lg">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default CredibilityTab;