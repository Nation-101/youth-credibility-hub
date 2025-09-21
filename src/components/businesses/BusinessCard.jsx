import React from 'react';
import { MapPin, User, Calendar, Users, Star, CheckCircle, AlertTriangle, ExternalLink, Mail } from 'lucide-react';

const BusinessCard = ({ business }) => {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'technology': return 'bg-blue-100 text-blue-800';
      case 'education': return 'bg-green-100 text-green-800';
      case 'fashion': return 'bg-pink-100 text-pink-800';
      case 'environment': return 'bg-emerald-100 text-emerald-800';
      case 'agriculture': return 'bg-amber-100 text-amber-800';
      case 'food': return 'bg-orange-100 text-orange-800';
      case 'services': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6 hover:shadow-xl transition-all duration-200">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{business.image}</div>
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900">{business.name}</h3>
              {business.verified ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-orange-600" />
              )}
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(business.category)}`}>
                {business.category}
              </span>
              {business.rating > 0 && (
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {renderStars(business.rating)}
                  </div>
                  <span className="text-sm text-gray-600">({business.reviews})</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Business Info */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2 text-gray-600">
          <User className="w-4 h-4" />
          <span className="text-sm">
            <span className="font-medium">{business.owner}</span>, {business.age} years old
          </span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{business.location}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">Founded {business.founded}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-600">
          <Users className="w-4 h-4" />
          <span className="text-sm">{business.employees} employees</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">{business.description}</p>

      {/* Revenue Range */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <div className="text-xs text-gray-500 mb-1">Monthly Revenue</div>
        <div className="text-sm font-medium text-gray-900">{business.revenue}</div>
      </div>

      {/* Actions */}
      <div className="flex space-x-2">
        {business.website && (
          <a
            href={`https://${business.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex-1 justify-center"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Visit Website</span>
          </a>
        )}
        
        <a
          href={`mailto:${business.contact}`}
          className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm flex-1 justify-center"
        >
          <Mail className="w-4 h-4" />
          <span>Contact</span>
        </a>
      </div>

      {/* Verification Status */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        {business.verified ? (
          <div className="flex items-center space-x-2 text-green-600">
            <CheckCircle className="w-4 h-4" />
            <span className="text-xs font-medium">Verified Youth Business</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 text-orange-600">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-medium">Verification Pending</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessCard;