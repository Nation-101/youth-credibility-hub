import React from 'react';
import { CheckCircle, Shield, Award } from 'lucide-react';

const VerificationBadge = ({ 
  type = 'default', 
  size = 'md', 
  showLabel = true, 
  variant = 'success' 
}) => {
  const getIcon = () => {
    const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
    
    switch (type) {
      case 'premium':
        return <Award className={`${iconSize} text-purple-600`} />;
      case 'security':
        return <Shield className={`${iconSize} text-blue-600`} />;
      default:
        return <CheckCircle className={`${iconSize} text-green-600`} />;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'premium':
        return 'Featured';
      case 'security':
        return 'Secure';
      default:
        return 'Verified';
    }
  };

  const getBadgeStyle = () => {
    const baseStyle = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';
    
    switch (type) {
      case 'premium':
        return `${baseStyle} bg-purple-100 text-purple-700 border border-purple-200`;
      case 'security':
        return `${baseStyle} bg-blue-100 text-blue-700 border border-blue-200`;
      default:
        return `${baseStyle} bg-green-100 text-green-700 border border-green-200`;
    }
  };

  if (!showLabel) {
    return getIcon();
  }

  return (
    <div className={`inline-flex items-center space-x-1 rounded-full font-medium ${getBadgeStyle()}`}>
      {getIcon()}
      <span>{getLabel()}</span>
    </div>
  );
};

export default VerificationBadge;