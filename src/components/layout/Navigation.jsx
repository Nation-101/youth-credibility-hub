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
    <nav className="bg-white/70 backdrop-blur-sm border-b border-purple-100 sticky top-16 z-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative py-4 px-3 font-medium text-sm transition-all duration-300 group whitespace-nowrap
                  ${isActive 
                    ? 'text-purple-700' 
                    : 'text-gray-500 hover:text-purple-600'
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className={`w-4 h-4 transition-colors duration-300 ${
                    isActive ? 'text-purple-700' : 'text-gray-400 group-hover:text-purple-600'
                  }`} />
                  <span>{tab.label}</span>
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-slideIn"></span>
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
