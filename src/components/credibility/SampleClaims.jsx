import React from 'react';
import { Eye, Clock } from 'lucide-react';
import { sampleClaims } from '../../data/sampleClaims';
import CredibilityScore from '../common/CredibilityScore';
import PlatformBadge from '../common/PlatformBadge';

const SampleClaims = ({ onAnalyze }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Try These Examples:</h3>
      <div className="grid gap-4">
        {sampleClaims.map((claim) => (
          <div
            key={claim.id}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-purple-100 group"
            onClick={() => onAnalyze(claim)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <PlatformBadge platform={claim.platform} size="sm" />
                  <CredibilityScore score={claim.credibilityScore} showLabel={false} size="sm" />
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>{claim.datePosted}</span>
                  </div>
                </div>
                <p className="text-gray-900 font-medium mb-2">{claim.claim}</p>
                <p className="text-sm text-gray-600">
                  From: {claim.originalPost}
                </p>
              </div>
              <button className="bg-purple-50 hover:bg-purple-100 p-2 rounded-lg transition-colors group-hover:bg-purple-100">
                <Eye className="w-4 h-4 text-purple-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleClaims;