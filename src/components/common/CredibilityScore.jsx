import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const CredibilityScore = ({ score, showLabel = true, size = 'md' }) => {
  const getCredibilityColor = (score) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCredibilityIcon = (score) => {
    const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
    
    if (score >= 8) return <CheckCircle className={`${iconSize} text-green-600`} />;
    if (score >= 5) return <AlertTriangle className={`${iconSize} text-yellow-600`} />;
    return <XCircle className={`${iconSize} text-red-600`} />;
  };

  const getCredibilityLabel = (score) => {
    if (score >= 8) return 'Highly Credible';
    if (score >= 5) return 'Needs Verification';
    return 'Not Credible';
  };

  return (
    <div className="flex items-center space-x-2">
      {getCredibilityIcon(score)}
      <div className={`${size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'}`}>
        <span className={`font-medium ${getCredibilityColor(score)}`}>
          {showLabel ? getCredibilityLabel(score) : `${score}/10`}
        </span>
        {showLabel && (
          <span className="text-gray-500 ml-1">({score}/10)</span>
        )}
      </div>
    </div>
  );
};

export default CredibilityScore;