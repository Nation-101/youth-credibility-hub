import React from 'react';

const PlatformBadge = ({ platform, size = 'md' }) => {
  const getPlatformColor = (platform) => {
    switch (platform.toLowerCase()) {
      case 'tiktok':
        return 'bg-black text-white';
      case 'instagram':
        return 'bg-gradient-to-r from-pink-500 to-purple-600 text-white';
      case 'facebook':
        return 'bg-blue-600 text-white';
      case 'twitter':
        return 'bg-sky-500 text-white';
      case 'youtube':
        return 'bg-red-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span className={`inline-block rounded-full font-medium ${getPlatformColor(platform)} ${sizeClasses}`}>
      {platform}
    </span>
  );
};

export default PlatformBadge;