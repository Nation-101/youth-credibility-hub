import React, { useState } from 'react';
import { X, MapPin, Tag, DollarSign, Users } from 'lucide-react';

const BusinessFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    revenueRange: '',
    verified: false,
    minRating: ''
  });

  const categories = [
    'Technology', 'Education', 'Fashion', 'Environment', 
    'Agriculture', 'Food', 'Services', 'Arts', 'Health', 'Finance'
  ];

  const locations = [
    'Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 
    'Port Elizabeth', 'Bloemfontein', 'East London', 'Online'
  ];

  const revenueRanges = [
    'R0-R5,000/month',
    'R5,000-R15,000/month',
    'R15,000-R30,000/month',
    'R30,000+/month'
  ];

  const updateFilter = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: '',
      location: '',
      revenueRange: '',
      verified: false,
      minRating: ''
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">Filter Businesses</h3>
        <button
          onClick={clearFilters}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-5 gap-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Tag className="w-4 h-4 inline mr-1" />
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => updateFilter('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-1" />
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Revenue Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <DollarSign className="w-4 h-4 inline mr-1" />
            Revenue
          </label>
          <select
            value={filters.revenueRange}
            onChange={(e) => updateFilter('revenueRange', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            <option value="">All Ranges</option>
            {revenueRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Min Rating
          </label>
          <select
            value={filters.minRating}
            onChange={(e) => updateFilter('minRating', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
          >
            <option value="">Any Rating</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="4.0">4.0+ Stars</option>
            <option value="3.5">3.5+ Stars</option>
            <option value="3.0">3.0+ Stars</option>
          </select>
        </div>

        {/* Verified Only */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Options
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.verified}
              onChange={(e) => updateFilter('verified', e.target.checked)}
              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <span className="text-sm text-gray-700">Verified only</span>
          </label>
        </div>
      </div>

      {/* Active Filters Display */}
      {(filters.category || filters.location || filters.revenueRange || filters.verified || filters.minRating) && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {filters.category && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                {filters.category}
              </span>
            )}
            {filters.location && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                {filters.location}
              </span>
            )}
            {filters.revenueRange && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                {filters.revenueRange}
              </span>
            )}
            {filters.minRating && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                {filters.minRating}+ stars
              </span>
            )}
            {filters.verified && (
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                Verified only
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessFilters;