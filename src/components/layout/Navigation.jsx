import React from 'react';
import { Shield, Calendar, TrendingUp, BookOpen } from 'lucide-react';

const Navigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'credibility',
      label: 'Credibility Assistant',
      icon: Shield,
      description: 'Fact-check social media content'
    },
    {
      id: 'sources',
      label: 'Source Verification',
      icon: BookOpen,
      description: 'Verify news sources and websites'
    },
    {
      id: 'events',
      label: 'Events & Opportunities',
      icon: Calendar,
      description: 'Find verified youth events'
    },
    {
      id: 'businesses',
      label: 'Youth Businesses',
      icon: TrendingUp,
      description: 'Support young entrepreneurs'
    }
  ];

  return (
    <nav className="bg-white/60 backdrop-blur-sm border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors group whitespace-nowrap ${
                  isActive
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-purple-600'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-600'
                  }`} />
                  <span>{tab.label}</span>
                </div>
                {isActive && (
                  <div className="text-xs text-purple-500 mt-1">
                    {tab.description}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;