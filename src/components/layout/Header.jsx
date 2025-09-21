import React from 'react';
import { Shield, Users } from 'lucide-react';
import { platformStats } from '../../data/platformStats';

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Youth Hub
              </h1>
              <p className="text-sm text-gray-600">Credibility & Opportunity Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
              <Users className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                {platformStats.totalActiveYouth.toLocaleString()} Active Youth
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;